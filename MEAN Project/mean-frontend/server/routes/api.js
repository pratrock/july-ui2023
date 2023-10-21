const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/videoLib";
const Video = require("./models/video.js");

// Connect to MongoDB using async/await
(async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error:", err);
  }
})();

// Get all videos
router.get("/videos", async (req, res) => {
  try {
    console.log("Get request for all videos");
    const videos = await Video.find({});
    res.json(videos);
  } catch (err) {
    console.error("Error retrieving videos");
    res.status(500).send("Error retrieving videos");
  }
});

// Get a video by ID
router.get("/videos/:id", async (req, res) => {
  try {
    console.log("Get Request for a video");
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (err) {
    console.error("Error retrieving video");
    res.status(500).send("Error retrieving video");
  }
});

// Insert a video
router.post("/video", async (req, res) => {
  try {
    console.log("Post a video");
    const newVideo = new Video({
      title: req.body.title,
      url: req.body.url,
      description: req.body.description,
    });
    const insertedVideo = await newVideo.save();
    res.json(insertedVideo);
  } catch (err) {
    console.error("Error saving video");
    res.status(500).send("Error saving video");
  }
});

// Update a video by ID
router.put("/video/:id", async (req, res) => {
  try {
    console.log("Updating a video");
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          url: req.body.url,
          description: req.body.description,
        },
      },
      {
        new: true,
      }
    );
    res.json(updatedVideo);
  } catch (err) {
    console.error("Error updating video");
    res.status(500).send("Error updating video");
  }
});

// Delete a video by ID
router.delete("/video/:id", async (req, res) => {
  try {
    console.log("Deleting a video");
    const deletedVideo = await Video.findByIdAndRemove(req.params.id);
    res.json(deletedVideo);
  } catch (err) {
    console.error("Error deleting video");
    res.status(500).send("Error deleting video");
  }
});

module.exports = router;

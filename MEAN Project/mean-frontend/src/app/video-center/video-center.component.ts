import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
})
export class VideoCenterComponent implements OnInit {
  constructor(private _videoService: VideoService) {}
  selectedVideo!: any;
  public hidenewVideo: boolean = true;
  videos: Video[] = [];

  ngOnInit(): void {
    this._videoService.getVideos().subscribe((resVideoData) => {
      for (const d of resVideoData as any) {
        this.videos.push(d);
      }
    });
  }
  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video).subscribe((resNewVideo) => {
      this.videos.push(resNewVideo);
      this.hidenewVideo = true;
      this.selectedVideo = resNewVideo;
    });
  }

  onSelectVideo(video: Video) {
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  onUpdateVideoEvent(video: Video) {
    this._videoService.updateVideo(video).subscribe((resUpdatedVideo) => {});
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: Video) {
    let videoArray = this.videos;

    this._videoService.deleteVideo(video).subscribe((resDeletedVideo) => {
      for (let i = 0; i < videoArray.length; i++) {
        if (videoArray[i]._id === video._id) {
          videoArray.splice(i, 1);
        }
      }
    });
    this.selectedVideo = null;
  }
}

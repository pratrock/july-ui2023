import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit {
  @Output() public updateVideoEvent = new EventEmitter();
  @Output() public deleteVideoEvent = new EventEmitter();
  @Input() public video!: Video;
  public editTitle: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}

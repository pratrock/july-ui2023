import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  @Input() videos!: Video[];
  @Output() public SelectVideo = new EventEmitter();

  onSelect(video: Video) {
    this.SelectVideo.emit(video);
  }
}

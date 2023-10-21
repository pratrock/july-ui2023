import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private _getUrl = '/api/videos';
  private _postUrl = '/api/video';
  private _putUrl = '/api/video/';
  private _deleteUrl = '/api/video/';

  constructor(private _http: HttpClient) {}

  /*  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'jwt-token',
    }),
  }; */

  getVideos(): Observable<Video[]> {
    return this._http.get<Video[]>(this._getUrl);
  }
  addVideo(video: Video): Observable<Video> {
    return this._http.post<Video>(this._postUrl, video).pipe();
  }

  updateVideo(video: Video): Observable<Video> {
    return this._http.put<Video>(this._putUrl + video._id, video).pipe();
  }

  deleteVideo(video: Video): Observable<Video> {
    return this._http.delete<Video>(this._deleteUrl + video._id).pipe();
  }
}

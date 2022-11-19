import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  getdataUrl = 'https://gentle-reaches-97927.herokuapp.com/images';
  addPhotoUrl = 'https://gentle-reaches-97927.herokuapp.com/images/add';
  deleteTaskUrl = 'https://gentle-reaches-97927.herokuapp.com/task/delete';
  completeTaskUrl = 'https://gentle-reaches-97927.herokuapp.com/task/complete';

  constructor(private http: HttpClient) { }

  getAllImages(): Observable<any> {
    return this.http.get<any>(this.getdataUrl);
  }

  addPhoto(url: any): Observable<any> {
    return this.http.post(this.addPhotoUrl, url);
  }
}

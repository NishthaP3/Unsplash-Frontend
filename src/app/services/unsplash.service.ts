import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  getdataUrl = 'https://gentle-reaches-97927.herokuapp.com/images';
  addPhotoUrl = 'https://gentle-reaches-97927.herokuapp.com/images/add';
  deletePhotoUrl = 'https://gentle-reaches-97927.herokuapp.com/images/delete';
  completeTaskUrl = 'https://gentle-reaches-97927.herokuapp.com/task/complete';
  updateUrl = 'https://gentle-reaches-97927.herokuapp.com/images/update'

  constructor(private http: HttpClient) { }

  getAllImages(searchTerm = ''): Observable<any> {
    return this.http.get<any>(this.getdataUrl);
  }

  addPhoto(url: any): Observable<any> {
    return this.http.post(this.addPhotoUrl, url);
  }

  deletePhoto(id: any): Observable<any> {
    return this.http.post(this.deletePhotoUrl, id);
  }

  updatePhoto(tile: any): Observable<any> {
    return this.http.post(this.updateUrl, tile);
  }
}

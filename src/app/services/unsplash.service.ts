import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  imagesUrl = "https://gentle-reaches-97927.herokuapp.com/images"

  constructor(private httpCLient: HttpClient) { }

  getAllImages(): Observable<any> {
    return this.httpCLient.get<any>(this.imagesUrl);
  }
}

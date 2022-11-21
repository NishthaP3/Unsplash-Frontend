import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import {UnsplashService} from "../../services/unsplash.service";

@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  url!: string;
  label!: string;
  photoData: any;

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {
  }

  addPhoto(){
    this.photoData = {
      url: this.url,
      label: this.label
    };

    this.unsplashService.addPhoto(this.photoData).subscribe((data) => {
      console.log(data);
    })
  }

}

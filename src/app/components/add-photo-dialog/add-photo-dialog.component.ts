import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';
import {UnsplashService} from "../../services/unsplash.service";
import { Tile } from '../unsplash/unsplash.component';

@Component({
  selector: 'app-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  url!: string;
  label!: string;
  photoData: any;
  modalName: any;
  tile!: any;
  data: any;

  constructor(private unsplashService: UnsplashService,
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
        ) {
          this.modalName = data.name;
          this.tile = data.tile;
         }

  ngOnInit(): void {
    console.log(this.modalName);
    console.log(this.tile);
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

  updatePhoto() {
    this.data = {
      label: this.label,
      url: this.url,
      _id: this.tile.text
    }
    this.unsplashService.updatePhoto(this.data).subscribe((result) => {
      console.log(result);
    })
  }

}

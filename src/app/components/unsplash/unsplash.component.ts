import { Component, OnInit } from '@angular/core';
import {AddPhotoDialogComponent} from "../add-photo-dialog/add-photo-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TodoService} from "../../services/todo.service";
import {UnsplashService} from "../../services/unsplash.service";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.css']
})
export class UnsplashComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
  constructor(public dialog: MatDialog, private unsplashService: UnsplashService) { }

  ngOnInit(): void {
  }

  addPhoto() {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

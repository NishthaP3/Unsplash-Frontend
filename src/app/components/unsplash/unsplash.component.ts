import {Component, OnInit, ViewChild} from '@angular/core';
import {AddPhotoDialogComponent} from "../add-photo-dialog/add-photo-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {TodoService} from "../../services/todo.service";
import {UnsplashService} from "../../services/unsplash.service";
import { animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";

export interface Tile {
  src: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  label: string;
}

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UnsplashComponent implements OnInit {
  tiles: Tile[] = [];
  searchTerm = '';
  displayedColumns: string[] = ['label'];

  constructor(public dialog: MatDialog, private unsplashService: UnsplashService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  getAllPhotos() {
    this.tiles = [];
    this.unsplashService.getAllImages().subscribe(data=>{
      for(const img of data){
        const tile = {text: img._id, cols: 2, rows: 2, color: '#DDBDF1', src: img.url, label: img.label};
        this.tiles.push(tile);
      }
    })
  }

  addPhoto() {
    const dialogRef = this.dialog.open(AddPhotoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllPhotos();
    });
  }

  filterPhotos(searchTerm: string) {
    if(searchTerm == ''){
      this.getAllPhotos();
    } else {
      this.tiles = this.tiles.filter(item => item.label.search(new RegExp(searchTerm, 'i')) > -1);
    }
  }

  deletePhoto(id: string) {
    console.log('in deletePhoto component', id);
    this.unsplashService.deletePhoto({'_id': id}).subscribe(res => {
      this.getAllPhotos();
    });
  }
}

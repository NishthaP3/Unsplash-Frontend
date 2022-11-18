import { Component, OnInit } from '@angular/core';
import { UnsplashService } from 'src/app/services/unsplash.service';
export interface Tile {
  src: string;
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
    // {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    // {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 2, rows: 2, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {
    this.unsplashService.getAllImages().subscribe(data=>{
      for(const img of data){
        const tile = {text: img._id, cols: 2, rows: 2, color: '#DDBDF1', src: img.url};
        this.tiles.push(tile);
      }
    })
  }

}

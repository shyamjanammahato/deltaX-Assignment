import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-songs',
  templateUrl: './home-top-songs.component.html',
  styleUrls: ['./home-top-songs.component.css']
})
export class HomeTopSongsComponent{
  // elements: any = [
  //   {id: "Artwork", first: 'Mark', last: 'Otto', handle: '@mdo'},
  //   {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
  //   {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  // ];
  topSongHeadElements = ['Artwork', 'Song', 'Date of Release', 'Artists', 'Rate'];
  stars = [1, 2, 3, 4, 5];
  rating = 1;

  onStarClick(starId: number){
    this.rating = starId;
  }
}

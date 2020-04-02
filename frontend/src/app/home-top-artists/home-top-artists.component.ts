import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-artists',
  templateUrl: './home-top-artists.component.html',
  styleUrls: ['./home-top-artists.component.css']
})
export class HomeTopArtistsComponent {
  topArtistHeadElements = ['Artists', 'Date of Birth', 'Songs'];
}

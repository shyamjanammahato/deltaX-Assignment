import { Artist } from './artist.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  selectedArtist: Artist;
  artists: Artist[];
  constructor(private _http: HttpClient) { }

  // for getting all artists
  getArtists() {
    return this._http.get('http://127.0.0.1:3000/users/artists');
  }
}

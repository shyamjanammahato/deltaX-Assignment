import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddNewArtistComponent } from '../add-new-artist/add-new-artist.component';

@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.css']
})
export class AddNewSongComponent {
  bsModalRef: BsModalRef;
  closeResult = '';

  constructor(private modalService: BsModalService) {}

  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(AddNewArtistComponent);
  }
}

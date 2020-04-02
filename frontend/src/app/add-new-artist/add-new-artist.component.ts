import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-new-artist',
  templateUrl: './add-new-artist.component.html',
  styleUrls: ['./add-new-artist.component.css'],
})
export class AddNewArtistComponent {
  constructor(public bsModalRef: BsModalRef) {}
}

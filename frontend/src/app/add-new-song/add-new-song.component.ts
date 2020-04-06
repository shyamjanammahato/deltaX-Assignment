import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddNewArtistComponent } from '../add-new-artist/add-new-artist.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from './../shared/artist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.css']
})
export class AddNewSongComponent {
  bsModalRef: BsModalRef;
  closeResult = '';
  userId:String='';
  selectedFile = null;
  dropdownSettings = {};
  selectedItems = [];
  newItem: String = "";

  addNewSongForm: FormGroup = new FormGroup({
    userId: new FormControl(null),
    songName: new FormControl(null, Validators.required),
    dateReleased: new FormControl(null,Validators.required),
    artwork: new FormControl(null, Validators.required),
    artists: new FormControl(null, Validators.required)
  });

  uploader: FileUploader = new FileUploader({});

  constructor(private _router: Router, private _userService: UserService, private http: HttpClient, private _snackBar: MatSnackBar, private modalService: BsModalService, public artistService: ArtistService) {
    this._userService.user()
    .subscribe(
      data=>this.addUserId(data)
    )
  }
  addUserId(data) {
    this.userId = data._id;
  }
  public openModalWithComponent() {
    /* this is how we open a Modal Component from another component */
    this.bsModalRef = this.modalService.show(AddNewArtistComponent);
  }

  ngOnInit() {
    this.refreshArtistList();
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "Unselect All",
      allowSearchFilter: true,
      classes: "myclass custom-class",
    };
  }

  submitNewSong(){

    if(!this.addNewSongForm.valid){
      this._snackBar.open("Please fill all the fields.", "Retry", {
        duration: 2000,
      });
    }
    else{
      var new_val = []
      for(let i=0; i<this.selectedItems.length; i++){
        new_val.push(this.selectedItems[i].item_id);
      }
      this.addNewSongForm.controls["userId"].setValue(this.userId);
      this.addNewSongForm.controls["artists"].setValue(new_val);
      
      this._userService.addNewSong(JSON.stringify(this.addNewSongForm.value))
      .subscribe(
        data=> { 
          this._snackBar.open("Artist added successfully.", "", {duration: 2000,});
          this._router.navigate(['/add-new-song']);
        },
        error=> console.log(error)
      )
      console.log(JSON.stringify(this.addNewSongForm.value));
    }
  }

  refreshArtistList() {
    let tmp = [];
    this.artistService.getArtists().subscribe(data => {
      for(let i=0; i < Object.keys(data).length; i++) {
        tmp.push({ item_id: data[i]._id, item_text: data[i].name });
      }
      this.artistService.artists = tmp;
    });
  }
  onItemSelect(item: any){
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  }
  onItemDeSelect(item: any){
    this.selectedItems = this.selectedItems.filter(({ item_id }) => item_id !== item['item_id']);
    console.log(item);
  }
  onSelectAll(items: any){
    this.selectedItems = [];
    this.selectedItems.push(items);
    // console.log(this.selectedItems);
  }
  onDeSelectAll(items: any){
    this.selectedItems = [];
    // console.log(this.selectedItems);
  }
}

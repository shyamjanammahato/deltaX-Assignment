import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-new-artist',
  templateUrl: './add-new-artist.component.html',
  styleUrls: ['./add-new-artist.component.css'],
})
export class AddNewArtistComponent  {
  userId:String='';

  addArtistForm: FormGroup = new FormGroup({
    userId: new FormControl(null),
    artistName: new FormControl(null, Validators.required),
    dateOfBirth: new FormControl(null,Validators.required),
    bio: new FormControl(null,Validators.required),
  });
  constructor(private _snackBar: MatSnackBar, public bsModalRef: BsModalRef, private _router: Router, private _artistService: UserService) {
    this._artistService.user()
    .subscribe(
      data=>this.addUserId(data)
    )
  }

  addUserId(data) {
    this.userId = data._id;
  }

  addArtist() {
    if(!this.addArtistForm.valid){
      this._snackBar.open("Please fill all the fields.", "Retry", {
        duration: 2000,
      });
    }
    else {
      this.addArtistForm.controls["userId"].setValue(this.userId);
      this._artistService.addNewArtist(JSON.stringify(this.addArtistForm.value))
      .subscribe(
        data=> { 
          this._snackBar.open("Artist added successfully.", "", {duration: 2000,});
          // this._router.navigate(['/add-new-song']);
          this.bsModalRef.hide();
        },
        error=> {this._snackBar.open("Error Occurred.", "Retry", {duration: 2000,});}
      )
      // console.log(JSON.stringify(this.addArtistForm.value));
    }
  }
}

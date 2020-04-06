import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,
      [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl(
      null,[Validators.required])
  });
  constructor(private _snackBar: MatSnackBar, private _router: Router, private _user: UserService) { 
    this._user.user()
    .subscribe(
      data=>this._router.navigate(['/homepage'])
    )
  }

  ngOnInit(): void {
  }
  
  login() {
    if(!this.loginForm.valid){
      this._snackBar.open("Invalid Credentials", "Retry", {
        duration: 2000,
      });
    }
    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=> {
        this._snackBar.open("Login Successful.", "", {duration: 2000,});
        this._router.navigate(['/homepage']);
      },
      error=> {this._snackBar.open("Invalid Credentials.", "Retry", {duration: 2000,});}
    )

  }
}

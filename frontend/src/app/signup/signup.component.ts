import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { passwordMatchValidator } from '../validator';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null,
      [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl(
      null,
      [
        Validators.required, 
        Validators.minLength(6),
      ]),
    cpass: new FormControl(null, [Validators.required, passwordMatchValidator])
  });
  constructor(private _snackBar: MatSnackBar, private _router: Router, private _userService: UserService) { 
    this._userService.user()
    .subscribe(
      data=>this._router.navigate(['/homepage'])
    )
  }

  ngOnInit(): void {
  }

  register() {
    if(!this.registerForm.valid){
      this._snackBar.open("Please fill all the fields.", "Retry", {
        duration: 2000,
      });
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> { 
        this._snackBar.open("Signup Successful. Login to Continue.", "", {duration: 2000,});
        this._router.navigate(['/signin']);
      },
      error=> {this._snackBar.open("Error Occurred.", "Retry", {duration: 2000,});}
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}

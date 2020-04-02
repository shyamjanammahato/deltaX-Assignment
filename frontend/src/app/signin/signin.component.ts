import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  constructor(private _router: Router, private _user: UserService) { 
    this._user.user()
    .subscribe(
      error=> this._router.navigate(['/signin'])
    )
  }

  ngOnInit(): void {
  }

  login() {
    if(!this.loginForm.valid){
      console.log('Invalid Form'); return;
    }
    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=> {this._router.navigate(['/homepage']);},
      // error=> console.log(error)
    )
  }

}

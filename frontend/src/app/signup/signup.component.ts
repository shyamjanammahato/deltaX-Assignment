import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { passwordMatchValidator } from '../validator';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

declare var M: any;

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
  constructor(private _router: Router, private _userService: UserService) { 
    this._userService.user()
    .subscribe(
      error=> this._router.navigate(['/signup'])
    )
  }

  ngOnInit(): void {
  }

  register() {
    if(!this.registerForm.valid){
      console.log('Invalid Forms'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> { this._router.navigate(['/signin']);},
      // error=> console.log(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  username:String='';
  constructor(private _user: UserService, private _router: Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=> this._router.navigate(['/signin'])
    )
  }

  addName(data) {
    this.username = data.username;
  }

  ngOnInit(): void {
  }

  logout() {
    this._user.logout()
    .subscribe(
      data=>{ this._router.navigate(['/signin'])},
      // error=>console.log(error)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public correctPassword = "user";
  public user;
  public pass;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public loginFunction(user, pass) {

    if (pass != this.correctPassword) {
      alert("Password is Incorrect");
    } else {
      this.router.navigate(['/home']);
    }

  }

}
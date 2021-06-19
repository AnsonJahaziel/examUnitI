import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!: FormGroup;

  public fullname;
  public email;
  public password;


  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      fullname: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    })

  }

  public userFunction(fullname, email, password) {
    if ((fullname && email && password) == null) {
      alert("Please fill the fields with your information")
    } else {
      alert("Name: " + fullname + "\nEmail: " + email);
    }

  }

  get getControl() {
    return this.userForm.controls;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm!:FormGroup;

  public skill;
  public level;
  public experience;
  public address;
  public telephone;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      skill:new FormControl('',[Validators.required,Validators.minLength(8)]),
      level:new FormControl('',[Validators.required]),
      experience:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required,Validators.minLength(8)]),
      telephone:new FormControl('',[Validators.required])
    })
  }

  get getControl(){
    return this.profileForm.controls;
  }

  profileFunction(skill, level, experience, address, telephone) {
    if ((skill && level && experience && address && telephone) == null) {
      alert("Please fill the fields with your information")
    } else {
      alert("Skill: " + skill + "\nLevel: " + level + "\nExperience: " + experience + "\nAddress: " + address + "\nTelephone: " + telephone);
    }

  }

}

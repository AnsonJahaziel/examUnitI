import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  CallAGreeting(){
    this.apiService.getGreeting().subscribe(((response: any) =>{
      let _response: any;
      _response = response;
      let x = JSON.parse(JSON.stringify(response));
      alert(x.greetings);
    }))
   
  }
  CallAName(){
    let data = {
      "firstname": "Anson Jahaziel",
      "lastname": "Arroyo Erives"
    }

    this.apiService.postFullname(data).subscribe(((response: any) =>{
      let _response: any;
      _response = response;
      let x = JSON.parse(JSON.stringify(response));
      alert(x.fullname);
    }))
   
  }
}
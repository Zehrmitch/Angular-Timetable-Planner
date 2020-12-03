import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
    this.email = "";
    this.password = "";
  }

  login(){
    // Add Login
  }

}

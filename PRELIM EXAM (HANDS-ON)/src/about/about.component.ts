import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name = "Code";
  public greeting = "";

  constructor() { }

  ngOnInit(): void{

  }

  onClick() {
    console.log('Congratulations! You hava a free Gifts');
    this.greeting = "Congratulations! You hava a free Gift";
  }

  resetClickCount() {
    this.greeting = "Congratulations!";
  }

}

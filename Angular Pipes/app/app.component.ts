import { Component, OnInit } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  time$: Observable <Date>;
  title = 'midterm1';
  presentDate = new Date();

  constructor () {
    this.time$ = interval(1000).pipe(map(()=> new Date()));
  }
  Cars =["Toyota", "Ford", "Mitsubishi", "BMW", "Hyundai", "Mazda"];
  ngOnInit() {
  }

  //DecimalPipes
  decimalNum1: number = 8.98463543;
  decimalNum2: number = 9.65;
  decimalNum3: number = 986.3216854;

  //CurrencyPipes
  price : number = 9853584;

  //Percent Pipes
  num = 888.88888888;
  num1 = 984.2158321;
  num2 = 58.5948533;

  //jsonPipes
  data: object = {
    name: "Mikaela", age: 18, food: 'Tempura',
    languages: [
      {lname: 'JS', level: 'Wizard'},
      {lname: 'PHP', level: 'Beginner'},
      {lname: 'Flutter', level: 'Beginner'}
    ]
  }

  aton: object = {
    name: "Kurapika", age: 18, food: 'Tempura',
    languages: [
      {lname: 'JS', level: 'Wizard'},
      {lname: 'PHP', level: 'Beginner'},
      {lname: 'Flutter', level: 'Beginner'},
      {lname: 'Python', level: 'Intermediate'}
    ]
  }



}




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit{
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  institution: string = '';
  academicInstitution: string = '';


  constructor() { }
  ngOnInit(): void {
    
  }

}



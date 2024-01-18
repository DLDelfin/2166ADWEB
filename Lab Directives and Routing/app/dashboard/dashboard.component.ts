import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Dennis', lastName: 'Gonzales', email: 'dennis.gonzales@test.com', role: 'User' },   
    { firstName: 'Kenji', lastName: 'Jaculbia', email: 'kenji.jaculbia@test.com', role: 'Admin' }, 
    { firstName: 'Darryll Timothy', lastName: 'Medina', email: 'daryl.medina@test.com', role: 'Admin' }, 
    { firstName: 'Rob Reuben', lastName: 'Sibal', email: 'rob.sibal@test.com', role: 'User' }, 
    { firstName: 'Aron', lastName: 'Layson', email: 'aron.layson@test.com', role: 'User' } 
    ];

    products = [
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 1', price: '$40.00 - $80.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 2', price: '$50.00 - $90.00' },
      { imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', name: 'Fancy Product 3', price: '$60.00 - $100.00' },
      // Add more product items as needed
    ];
}

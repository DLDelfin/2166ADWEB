import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_data_binding'; //Interpolation
  clientName = "Dayson Delfin"; //Property Binding
  appliedCSS = 'green'; //Style Binding
  notAppliedCSS = false;
  myColor = 'red';

  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  
  


}

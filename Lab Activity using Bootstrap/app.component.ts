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
  title = 'DataBinding2';
  clientName = "DAYSON DELFIN";
  appliedCSS = "Tagline";
  notAppliedCSS = false;
  myColor = "red";
  myShopName = "DeeDelfz Car Shop and Accessories";

  clickCount=0
  clickMe(){
    this.clickCount++;
  }

  
}

import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String Interpolation
  position = "I am a Student";
  work_experience = "12 years of Working Experience";
  email = "bulukutsalakut@ymail.com";
  phone = "0123-456-789";
  website = "akoaysiako.com";

  //image interploation/binding
  imageUrl: string = "https://hau.instructure.com/files/7915597/download?download_frd=1";
  imageW: number = 380;
  imageH: number = 380;
}

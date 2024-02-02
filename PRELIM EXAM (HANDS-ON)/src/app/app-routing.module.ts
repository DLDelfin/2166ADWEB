import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';



const routes: Routes = [
  { path: 'about',
  component: AboutComponent
  },
  { path: 'home',
  component: HomeComponent
  },
  { path: 'join',
  component: JoinComponent
  },
  { path: 'ourpartners',
  component: OurpartnersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

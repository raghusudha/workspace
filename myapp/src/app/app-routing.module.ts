import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SampleComponent } from './sample/sample.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CustomersComponent } from './customers/customers.component';



const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"sample",
    component:SampleComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"menu",
    component:MenuComponent
  },
  {
    path:"heroes",
    component:HeroesComponent
  },
  {
    path:"customers",
    component:CustomersComponent
  },
  {
    path:"",
    redirectTo:"customers",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

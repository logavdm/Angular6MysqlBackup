import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DashboardComponent} from './dashboard.component';
import { DashboardNotFoundComponent } from './dashboard-not-found/dashboard-not-found.component';

import {TaskModule,TaskRoutes} from './task/task.module';
import {TaskComponent} from './task/task.component';


const routes: Routes = [
{
	path:'dashboard',
	component:DashboardComponent,
	children:[
    {
      path:'',
      component:TaskComponent,
      children:TaskRoutes
    }

  ]
}
];

@NgModule({
  declarations: [
  	DashboardComponent,
  	HeaderComponent,
  	SidebarComponent,
  	FooterComponent,
  	DashboardNotFoundComponent,
  ],
  imports: [
    CommonModule,
    TaskModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  exports:[DashboardComponent]
})
export class DashboardModule { }

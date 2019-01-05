import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TaskComponent} from './task.component';
import { RunningComponent } from './running/running.component';
import { AllComponent } from './all/all.component';
import { StoppedComponent } from './stopped/stopped.component';
import { ViewComponent } from './view/view.component';
import { ActivityComponent } from './view/activity/activity.component';
import { ActionComponent } from './view/action/action.component';

export const TaskRoutes: Routes = [
	{
		path:'',
		component:AllComponent
	},
	{
		path:'all',
		component:AllComponent
	},
	{
		path:'running',
		component:RunningComponent
	},
	{
		path:'stopped',
		component:StoppedComponent
	},
	{
		path:'view/:id',
		component:ViewComponent,
		children:[
			{
				path:'',
				redirectTo:'activity', pathMatch: 'full'
			},
			{
				path:'activity',
				component:ActivityComponent
			},
			{
				path:'action',
				component:ActionComponent
			}

		]
	}
];


@NgModule({
  declarations: [
  TaskComponent,
  RunningComponent,
  AllComponent,
  StoppedComponent,
  ViewComponent,
  ActivityComponent,
  ActionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports:[TaskComponent]
})
export class TaskModule { }

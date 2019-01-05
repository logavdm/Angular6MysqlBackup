import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardModule} from './dashboard/dashboard.module';

import {HttpServiceService} from './services/http-service.service';
import { ViewTaskStatisticsComponent } from './view-task-statistics/view-task-statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTaskStatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

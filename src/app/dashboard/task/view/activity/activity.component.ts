import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TaskActivityLog} from '../../../../models/task.activity.log';
import { ResponseWithPageable } from '../../../../models/responsewithpageable.model';
import {environment} from '../../../../../environments/environment';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import {HttpServiceService} from '../../../../services/http-service.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

	totalActivityLog: number;
	pageTaskActivityLog: TaskActivityLog[] = [];
	currentPage: number = 1;
	limit: number;

	taskID:string;
	//filter configurations
	minFilter:number=environment.tableFilterMinValue;

  constructor(private http:HttpServiceService,private activeRoute: ActivatedRoute) { 
  	this.activeRoute.parent.params.subscribe(params => {
    	this.taskID=params.id;	
  	});
  }

  ngOnInit() {
		let Params = new HttpParams();
		this.limit=this.minFilter;
		Params = Params.append('id', this.taskID);
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		
		this.http.get("/user/task/activity",Params).subscribe((data: ResponseWithPageable) => {
			if (data.responsecode == "200") {
				console.log(data);
				this.pageTaskActivityLog = data.response.result;
				this.totalActivityLog = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }

  loadPage(){
  		let Params = new HttpParams();
		this.limit=this.minFilter;
		Params = Params.append('id', this.taskID);
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		
		this.http.get("/user/task/activity",Params).subscribe((data: ResponseWithPageable) => {
			if (data.responsecode == "200") {
				console.log(data.response);
				this.pageTaskActivityLog = data.response.result;
				this.totalActivityLog = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }

}

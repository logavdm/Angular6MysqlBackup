import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {TaskActionLog} from '../../../../models/task.action.log';
import { ResponseWithPageable } from '../../../../models/responsewithpageable.model';
import {environment} from '../../../../../environments/environment';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import {HttpServiceService} from '../../../../services/http-service.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

	totalActionLog: number;
	pageTaskActionLog: TaskActionLog[] = [];
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
		
		this.http.get("/user/task/action",Params).subscribe((data: ResponseWithPageable) => {
			if (data.responsecode == "200") {
				console.log(data);
				this.pageTaskActionLog = data.response.result;
				this.totalActionLog = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
				this.pageTaskActionLog=null;
				this.totalActionLog=0;
				this.currentPage=0;
			}
		});
  }

  loadPage(){
  		let Params = new HttpParams();
		this.limit=this.minFilter;
		Params = Params.append('id', this.taskID);
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		
		this.http.get("/user/task/action",Params).subscribe((data: ResponseWithPageable) => {
			if (data.responsecode == "200") {
				console.log(data.response);
				this.pageTaskActionLog = data.response.result;
				this.totalActionLog = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }

}

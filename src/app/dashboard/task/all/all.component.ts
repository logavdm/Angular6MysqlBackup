import { Component, OnInit } from '@angular/core';

import {Task} from '../../../models/task.model';
import { ResponseWithPageable } from '../../../models/responsewithpageable.model';
import {environment} from '../../../../environments/environment';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import {HttpServiceService} from '../../../services/http-service.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

	filter: string = '';
	totalTask: number;
	pageTask: Task[] = [];
	currentPage: number = 1;
	limit: number;

	//filter configurations
	minFilter:number=environment.tableFilterMinValue;
	filterStep:number=environment.tableFilterMinValue;
	filterMaxItems:number=environment.tableFilterMaxItemShow;

  constructor(private http:HttpServiceService) { }

  ngOnInit() {
		this.limit=this.minFilter;
		let Params = new HttpParams();
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		Params = Params.append('filter', this.filter);
		
		this.http.get("/user/task/list/pagination",Params).subscribe((data: ResponseWithPageable) => {
			console.log(data);
			if (data.responsecode == "200") {
				console.log(data.response);
				this.pageTask = data.response.result;
				this.totalTask = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }


  search() {
		this.limit=this.minFilter;
		let Params = new HttpParams();
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		Params = Params.append('filter', this.filter);
		
		this.http.get("/user/task/list/pagination",Params).subscribe((data: ResponseWithPageable) => {
			console.log(data);
			if (data.responsecode == "200") {
				console.log(data.response);
				this.pageTask = data.response.result;
				this.totalTask = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }


	itemCount() {
		this.limit=this.minFilter;
		let Params = new HttpParams();
		Params = Params.append('page', (this.currentPage - 1).toString());
		Params = Params.append('limit', (this.limit).toString());
		Params = Params.append('filter', this.filter);
		
		this.http.get("/user/task/list/pagination",Params).subscribe((data: ResponseWithPageable) => {
			console.log(data);
			if (data.responsecode == "200") {
				console.log(data.response);
				this.pageTask = data.response.result;
				this.totalTask = data.response.totalRecords;
				this.currentPage = data.response.currentPage + 1;				
			} else {
				console.log("Error occured "+data);
			}
		});
  }


  startProcess(id:number){
  	this.http.get("/user/task/start/"+id,null).subscribe((data: ResponseWithPageable) => {
		console.log(data);
		if (data.responsecode == "200") {
			console.log(data.response);
			this.search();
		} else {
			console.log("Error occured "+data);
		}
	});
	
  }

  stopProcess(id:number){
  	this.http.get("/user/task/stop/"+id,null).subscribe((data: ResponseWithPageable) => {
		console.log(data);
		if (data.responsecode == "200") {
			this.search();
			console.log(data.response);
		} else {
			console.log("Error occured "+data);
		}
	});
	
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

    header:string='Basic '+btoa('9894431212:demodemo9*');

  	constructor(private http: HttpClient) { }

  	get(url:string,param:HttpParams){
  		let header=new HttpHeaders().set('Authorization', this.header);
  		return this.http.get(environment.APIEndpoint+url,{ headers: header, params: param });
  	}

  	post(url:string,param:HttpParams){
  		let header=new HttpHeaders().set('Authorization', this.header);
  		return this.http.post(environment.APIEndpoint+url,{ headers: header, params: param });
  	}

 
}

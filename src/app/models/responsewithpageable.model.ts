import {Pageable} from './pageable.model';

export interface ResponseWithPageable {
	responsecode:string;
	message:string;
	timestamp:string;
	response:Pageable;	
}
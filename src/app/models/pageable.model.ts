export interface Pageable {
	totalRecords:number;
	currentPage:number;
	responseCount:number;
	firstPage:boolean;
	lastPage:boolean;
	result:any;	
}
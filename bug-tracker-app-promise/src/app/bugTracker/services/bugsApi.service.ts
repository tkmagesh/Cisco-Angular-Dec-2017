
import * as axios from 'axios';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugsApiService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){
		console.dir(axios);
	}
	getAll() : Promise<IBug[]>{
		return axios.get(this.baseUrl)
			.then(response => response.data);
	}
	addNew(bugName : string) : Promise<IBug>{
		let newBugData = this.bugOperations.createNew(bugName);
		return axios.post(this.baseUrl, newBugData)
			.then(response => {
				console.log(response);
				return response.data;
			});
	}
	toggle(bugToToggle : IBug) : Promise<IBug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios.put(`${this.baseUrl}/${bugToToggle.id}`, toggledBug)
			.then(response => {
				return response.data;
			});
	}
	remove(){

	}
}
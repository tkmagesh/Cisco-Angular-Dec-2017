import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOperations : BugOperationsService){

	}

	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}
	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(bugName, ++this.currentBugId );
		this.save(newBug);
		return newBug;
	}
	private save(bug : IBug) : void{
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	toggle(bug : IBug) : void{
		this.bugOperations.toggle(bug);
		this.save(bug);
	}
	remove(bug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}
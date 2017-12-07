import { Component, Output, EventEmitter } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/bugStorage.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName">
			<input type="button" value="Create" (click)="onCreateClick()">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	public createBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	public newBugName : string = '';

	constructor(private bugStorage : BugStorageService){
		
	}
	onCreateClick(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		this.createBug.emit(newBug);
	}
}
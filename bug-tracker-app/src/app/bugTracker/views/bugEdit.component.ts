import { Component, Output, EventEmitter } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/bugStorage.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	public createBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService){
		
	}
	onCreateClick(bugName : string){
		let newBug = this.bugStorage.addNew(bugName);
		this.createBug.emit(newBug);
	}
}
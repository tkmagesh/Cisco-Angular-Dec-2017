import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'app-bug-tracker',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="sortBugsBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="sortBugsDescending">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of (bugs | sort:sortBugsBy:sortBugsDescending)">
					<span class="bugname" (click)="onBugClick(bug)"
						[ngClass]="{closed : bug.isClosed}"
						>
						{{bug.name | trimText:40}}
					</span>
					<div class="datetime">[Created At]</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		</section>
	`
})
export class BugTrackerComponent{

	bugs : IBug[] = [];
	sortBugsBy : string = 'name';
	sortBugsDescending : boolean = false;

	onCreateClick(bugName : string){
		let newBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle : IBug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce(function(prevResult, bug) {
			return bug.isClosed ? ++prevResult : prevResult; 
		}, 0);
		
	}
}
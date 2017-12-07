import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';

@Component({
	selector : 'app-bug-tracker',
	template : `
		<bug-stats [data]="bugs"></bug-stats>
		<section class="sort">
			<label for="">Order By :</label>
			<select [(ngModel)]="sortBugsBy">
				<option value="name">Name</option>
				<option value="isClosed">Status</option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" [(ngModel)]="sortBugsDescending">
		</section>
		<bug-edit (createBug)="onBugCreated($event)"></bug-edit>
		<section class="list">
			<ol>
				<li *ngFor="let bug of (bugs | sort:sortBugsBy:sortBugsDescending)">
					<span class="bugname" (click)="onBugClick(bug)"
						[ngClass]="{closed : bug.isClosed}"
						>
						{{bug.name | trimText:40}}
					</span>
					<div class="datetime" [title]="bug.createdAt | date:'dd-MMM-yyyy hh:mm:ss a'">{{bug.createdAt | elapsed}}</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed" (click)="onRemoveClosedClick()">
		</section>
	`
})
export class BugTrackerComponent implements OnInit{

	bugs : IBug[] = [];
	sortBugsBy : string = 'name';
	sortBugsDescending : boolean = false;

	constructor(private bugStorage : BugStorageService){

	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}
	
	onBugCreated(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		this.bugStorage.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	
}
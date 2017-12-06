import { Component } from '@angular/core';

@Component({
	selector : 'app-bug-tracker',
	template : `
		<section class="stats">
			<span class="closed">1</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
		<section class="sort">
			<label for="">Order By :</label>
			<select name="" id="">
				<option value=""></option>
				<option value=""></option>
			</select>
			<label for="">Descending ? :</label>
			<input type="checkbox" name="" id="">
		</section>
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
		<section class="list">
			<ol>
				<li *ngFor="let bug of bugs">
					<span class="bugname">{{bug}}</span>
					<div class="datetime">[Created At]</div>
				</li>
			</ol>
			<input type="button" value="Remove Closed">
		</section>
	`
})
export class BugTrackerComponent{

	bugs : string[] = [];

	onCreateClick(bugName){
		this.bugs.push(bugName);
	}

}
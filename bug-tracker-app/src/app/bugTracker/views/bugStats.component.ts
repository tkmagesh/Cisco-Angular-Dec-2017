import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`
})
export class BugStatsComponent{
	@Input('data')
	bugs : IBug[] = [];

	getClosedCount(){
		//console.log('getClosedCount triggered');
		return this.bugs.reduce(function(prevResult, bug) {
			return bug.isClosed ? ++prevResult : prevResult; 
		}, 0);
		
	}
}
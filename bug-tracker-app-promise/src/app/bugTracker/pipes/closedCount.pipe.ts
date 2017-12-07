import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: IBug[]): number {
		//console.log('closedCount pipe triggered');
		return bugs.reduce(function(prevResult, bug) {
			return bug.isClosed ? ++prevResult : prevResult; 
		}, 0);
	}
}
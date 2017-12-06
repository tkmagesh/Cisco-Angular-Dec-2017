import { Pipe, PipeTransform } from '@angular/core';
interface IComparer{
	(item1 : any, item2 : any) : number
}
@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName : string) : IComparer {
		return function(p1, p2){
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}
	private getInverseComparerFor(comparer : IComparer) : IComparer{
		return function(p1, p2){
	        return comparer(p1, p2) * -1;
	    }
	}
	transform(data : any[], attrName : string, isDescending : boolean = false) : any[]{
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getInverseComparerFor(comparer);
		return data.sort(comparer);
	}
}
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(data : any) : any{
		return data.length <= 30 ? data : data.substr(0,30) + '...';
	}
}
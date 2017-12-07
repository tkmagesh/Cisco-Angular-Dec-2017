import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string, id : number = 0) : IBug{
		let newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bugToToggle : IBug) : void {
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}
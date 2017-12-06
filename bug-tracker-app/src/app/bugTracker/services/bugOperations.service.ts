import { IBug } from '../models/IBug';

export class BugOperationsService{
	createNew(bugName : string) : IBug{
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		return newBug;
	}
	toggle(bugToToggle : IBug) : void {
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}
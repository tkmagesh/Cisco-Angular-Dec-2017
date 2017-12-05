import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{

	message : string = '[Default greet message]';

	greet(username : string){
		this.message = `Hi ${username}, Have a nice day!`;
	}
}
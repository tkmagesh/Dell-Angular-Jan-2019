import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	
	message : string = '';

	onGreetClick(userName){
		this.message = `Hi ${userName}, Have a nice day!`
	}
}
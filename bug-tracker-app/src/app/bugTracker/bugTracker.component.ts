import { Component } from '@angular/core';

/*
class Bug{
	constructor(public name : string, public isClosed : boolean = false){

	}
	toggle(){
		this.isClosed = !this.isClosed;
	}
}
*/

interface Bug{
	name : string,
	isClosed : boolean
}

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	onAddNewClick(newBugName : string){
		/* let newBug = new Bug(newBugName); */
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		} 
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle : Bug){
		bugToToggle.isClosed = !bugToToggle.isClosed;
	}
}
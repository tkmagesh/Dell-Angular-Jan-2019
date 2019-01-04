import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];

	bugSortAttr : string = '';
	bugSortDesc : boolean = false;
	
	constructor(private bugOperations : BugOperationsService){
		/*this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Application not responding'));*/
		
	}

	ngOnInit(){
		this.bugs = this.bugOperations.getAll();
	}

	onAddNewClick(newBugName : string){
		/* let newBug = new Bug(newBugName); */
		let newBug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}


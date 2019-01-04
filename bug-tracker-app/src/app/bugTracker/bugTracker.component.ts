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
		
	}

	ngOnInit(){
		this.bugs = this.bugOperations.getAll();
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}


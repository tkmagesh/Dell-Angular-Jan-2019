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
		this.bugOperations
			.getAll()
			.then(bugs => this.bugs = bugs);
	}

	onBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.then(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations
					.remove(closedBug)
					.then(_ => this.bugs = this.bugs.filter(bug => !bug.isClosed))
			});
	}
}


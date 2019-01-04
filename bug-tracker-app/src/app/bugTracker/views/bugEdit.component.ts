import { Component, Output, EventEmitter } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { AppEventService } from '../services/appEvent.service';

import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName"  >
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName = '';

	@Output()
	create : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService, private appEvent : AppEventService){

	}
	onAddNewClick(){
		this.bugOperations
			.createNew(this.newBugName)
			.subscribe(newBug => {
				this.create.emit(newBug);
				this.appEvent.emit('appMessage', 'A new bug is created');
			});
	}
}
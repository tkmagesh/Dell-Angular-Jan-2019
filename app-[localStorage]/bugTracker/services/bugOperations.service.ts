import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{
	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = this.bugStorage.save(newBugData);
		return newBug;
	}

	toggle(bugToToggle : Bug) : Bug {
		let toggledBug  = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		this.bugStorage.save(toggledBug);
		return toggledBug;
	}
	getAll() : Bug[] {
		return this.bugStorage.getAll();
	}
	remove(bug : Bug) : void {
		this.bugStorage.remove(bug);
	}
}
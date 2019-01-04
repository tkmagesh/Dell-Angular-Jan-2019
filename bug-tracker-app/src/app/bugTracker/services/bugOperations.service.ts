import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{
	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Observable<Bug> {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugStorage.save(newBugData);
	}

	toggle(bugToToggle : Bug) : Observable<Bug> {
		let toggledBug  = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorage.save(toggledBug);
	}
	getAll() : Observable<Bug[]> {
		return this.bugStorage.getAll();
	}
	remove(bug : Bug) : Observable<any> {
		return this.bugStorage.remove(bug);
	}
}
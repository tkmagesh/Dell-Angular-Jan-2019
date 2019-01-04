import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BugStorageService{
	private apiEndPoint = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}
	getAll() : Observable<Bug[]> {
		return this.httpClient
			.get<Bug[]>(this.apiEndPoint);
	}

	save(bug : Bug) : Observable<Bug> {
		if (bug.id === 0) /* new bug*/ {
			return this.httpClient
				.post<Bug>(this.apiEndPoint, bug);
		} else {
			return this.httpClient
				.put<Bug>(`${this.apiEndPoint}/${bug.id}`, bug);
		}
	}

	remove(bug : Bug) : Observable<any> {
		return this.httpClient
			.delete<any>(`${this.apiEndPoint}/${bug.id}`);
	}
}
import { Bug } from '../models/Bug';
import axios from 'axios';

export class BugStorageService{
	private apiEndPoint = 'http://localhost:3000/bugs';

	getAll() : Promise<Bug[]> {
		return axios
			.get(this.apiEndPoint)
			.then(response => response.data);
	}

	save(bug : Bug) : Promise<Bug> {
		if (bug.id === 0) /* new bug*/ {
			return axios
				.post(this.apiEndPoint, bug)
				.then(response => response.data);
		} else {
			return axios
				.put(`${this.apiEndPoint}/${bug.id}`, bug)
				.then(response => response.data);	
		}
	}

	remove(bug : Bug) : Promise<any> {
		return axios
			.delete(`${this.apiEndPoint}/${bug.id}`)
			.then(response => response.data);
	}
}
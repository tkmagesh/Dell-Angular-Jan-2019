import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AppEventService } from '../services/appEvent.service';

import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-stats',
	template : `
		<div>{{message}}</div>
		<section class="stats">
			<span class="closed">{{bugs | closedCount}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent implements OnInit{

	@Input('data')
	bugs : Bug[] = [];

	message : '';

	constructor(private appEvent : AppEventService){

	}

	ngOnInit(){
		this.appEvent
			.subscribe('appMessage', (message) => this.message = message);
	}
	getTime(){	
		return Date();
	}

}
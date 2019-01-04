import { EventEmitter } from '@angular/core';

export class AppEventService{
	private eventEmitters = { };

	subscribe(eventName : string, subscription : any){
		this.eventEmitters[eventName] = this.eventEmitters[eventName] || new EventEmitter<any>();
		this.eventEmitters[eventName].subscribe(subscription);
	}

	emit(eventName : string, data : any ){
		let eventEmitter = this.eventEmitters[eventName];
		if (eventEmitter)
			eventEmitter.emit(data);
	}
}
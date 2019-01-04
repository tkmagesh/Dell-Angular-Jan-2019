import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { AppEventService } from './bugTracker/services/appEvent.service';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe    
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
  ],
  providers: [
  	BugOperationsService
    , BugStorageService
    , AppEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

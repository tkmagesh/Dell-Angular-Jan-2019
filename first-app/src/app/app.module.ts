import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
  	/* UI Entities (Components, Directives & Pipes) */
    AppComponent
    , GreeterComponent
    , CalculatorComponent
  ],
  imports: [
  	/* Other dependent modules*/
    BrowserModule
  ],
  providers: [
  	/* Non UI (services) */
  ],
  bootstrap: [AppComponent, GreeterComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorTwoComponent} from './calculator/calculatorTwo.component';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';
import { CalculatorModel } from './calculator/CalculatorModel';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
  	/* UI Entities (Components, Directives & Pipes) */
    AppComponent
    , GreeterComponent
    , CalculatorComponent
    , CalculatorTwoComponent
    , CalculatorResultComponent
    , ProductsComponent
  ],
  imports: [
  	/* Other dependent modules*/
    BrowserModule
  ],
  providers: [
  	/* Non UI (services) */
    CalculatorModel
  ],
  bootstrap: [AppComponent, GreeterComponent]
})
export class AppModule { }

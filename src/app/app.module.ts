import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MortgageComponent } from './pages/mortgage/mortgage.component';
import { PreevaluationComponent } from './pages/preevaluation/preevaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageComponent,
    PreevaluationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeModalComponent } from './employee/employee-modal/employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

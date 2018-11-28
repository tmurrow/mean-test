import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertStudentComponent, DisplayStudentsComponent } from './views/';
import { StudentsResolver } from './resolvers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InsertStudentComponent,
    DisplayStudentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StudentsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

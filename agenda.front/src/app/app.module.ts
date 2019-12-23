import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatientComponent } from '../app/components/patient/patient.component';
import { PatientService } from './components/patient/patient.service';
import { SchedulesComponent } from './components/schedules/schedules.component'
import { SchedulesService } from './components/schedules/schedules.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SchedulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    SchedulesService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

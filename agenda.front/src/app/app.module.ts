import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatientComponent } from '../app/components/patient/patient.component';
import { PatientService } from './components/patient/patient.service';
import { SchedulesComponent } from './components/schedules/schedules.component'
import { SchedulesService } from './components/schedules/schedules.service';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientDetailComponent } from './components/patient/patient-detail/patient-detail.component';
import { SharedDataService } from './utils/sharedData.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SchedulesComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SchedulesService,
    PatientService,
    SharedDataService,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

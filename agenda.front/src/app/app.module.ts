import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatientComponent } from '../app/components/patient/patient.component';
import { PatientService } from './components/patient/patient.service';
import { MedicalConsultationComponent } from '../app/components/medicalConsultation/medicalConsultation.component'
import { MedicalConsultationService } from './components/medicalConsultation/medicalConsultation.service';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MedicalConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MedicalConsultationService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

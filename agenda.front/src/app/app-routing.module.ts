import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalConsultationComponent } from './components/medicalConsultation/medicalConsultation.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {path: 'medicalConsultation', component: MedicalConsultationComponent},
  {path: 'patient', component: PatientComponent},
  {path: '', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

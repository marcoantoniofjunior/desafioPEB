import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientDetailComponent } from './components/patient/patient-detail/patient-detail.component';

const routes: Routes = [
  {path: 'schedules', component: SchedulesComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'patientDetail', component: PatientDetailComponent},
  {path: '', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

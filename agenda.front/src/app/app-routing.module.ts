import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [
  {path: 'schedules', component: SchedulesComponent},
  {path: 'patient', component: PatientComponent},
  {path: '', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

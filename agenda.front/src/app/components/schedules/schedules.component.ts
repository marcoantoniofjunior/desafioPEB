import { Component, OnInit } from "@angular/core";
import { SchedulesService } from "./schedules.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { PatientService } from "../patient/patient.service";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "schedules",
  templateUrl: "./schedules.component.html",
  styleUrls: ["./schedules.component.css"]
})
export class SchedulesComponent implements OnInit {
  modalReference: NgbModalRef;

  schedules: any[] = [];

  dateSchedule: any;
  patients: any[] = [];
  selectedPatient: any;
  schedulePatientDetail = { patientCode: "", dateConsultation: "" };
  displayName = "Selecione um paciente";

  constructor(
    private schedulesService: SchedulesService,
    private patientService: PatientService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.listSchedules();
    this.getListPatients();
  }

  selectPatient(patient: any) {
    this.displayName = patient.name;
    this.selectedPatient = patient;
    this.schedulePatientDetail.patientCode = patient.patientId;
  }

  clearSelectPatient() {
    this.selectedPatient = {};
    this.schedulePatientDetail.dateConsultation = "";
    this.schedulePatientDetail.patientCode = "";
    this.displayName = "Selecione um paciente";
  }

  listSchedules() {
    this.schedules = [];

    this.schedulesService
      .getList()
      .toPromise()
      .then(
        (s: any) => {
          this.schedules = s;
        },
        err => {
          console.log(err);
        }
      );
  }

  getListPatients() {
    this.patients = [];

    this.patientService
      .getList()
      .toPromise()
      .then(
        (p: any) => {
          this.patients = p;
        },
        err => {
          console.log(err);
        }
      );
  }

  open(content) {
    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title"
    });
    this.modalReference.result.then();
  }

  schedulePatient() {
    this.schedulePatientDetail.dateConsultation = `${this.dateSchedule.year}-${this.dateSchedule.month}-${this.dateSchedule.day}`;
    this.schedulesService
      .create(this.schedulePatientDetail)
      .toPromise()
      .then(
        (p: any) => {
          this.listSchedules();
          this.clearSelectPatient();
          this.modalReference.close();
          // alert success ;
        },
        err => {
          console.log(err);
        }
      );
  }
}

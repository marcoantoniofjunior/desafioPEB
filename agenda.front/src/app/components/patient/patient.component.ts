import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  modalReference: NgbModalRef;

  patients: any[] = [];

  patient = {
    name: '',
    dateBirth: '',
    phone: '',
    gender: '',
    weight: '',
    height: ''
  };

  constructor(
    private patientService: PatientService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.listPatient();
  }

  listPatient() {
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
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
    this.modalReference.result.then(
      result => {},
      reason => {}
    );
  }

  createPatient() {
    console.log(this.patient);
    this.patientService
      .create(this.patient)
      .toPromise()
      .then(
        (p: any) => {
          this.listPatient();
          this.modalReference.close();
          // alert success ;
        },
        err => {
          // alert error ;
          console.log(err);
        }
      );
  }
}

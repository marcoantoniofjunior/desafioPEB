import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/utils/sharedData.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  modalReference: NgbModalRef;
  firstName = '';

  constructor(
    private patientService: PatientService,
    private modalService: NgbModal,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  patientDetail: any;
  patientDetailEdit: any;
  annotations: any[] = [];

  ngOnInit() {
    this.patientDetail = this.sharedDataService.getData();
    this.patientDetailEdit = this.sharedDataService.getData();

    if (!this.patientDetail) {
      this.router.navigate(['/patient']);
    }

    //this.getPatientAnnotations(this.patientDetail);
  }

  openEdit(content) {
    this.patientDetailEdit = this.sharedDataService.getData();

    this.modalReference = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });
    this.modalReference.result.then(
      result => {},
      reason => {}
    );
  }

  openDelete(modalDelete) {
    this.modalReference = this.modalService.open(modalDelete, {
      ariaLabelledBy: 'modal-basic-title'
    });
    this.modalReference.result.then(
      result => {},
      reason => {}
    );
  }

  openCreateAnnotation(modalAnnotation) {
    this.modalReference = this.modalService.open(modalAnnotation, {
      ariaLabelledBy: 'modal-basic-title'
    });
    this.modalReference.result.then(
      result => {},
      reason => {}
    );
  }

  editPatient() {
    this.patientService
      .edit(this.patientDetailEdit)
      .toPromise()
      .then(
        (result: any) => {
          this.modalReference.close();
          this.patientDetail = JSON.parse(
            JSON.stringify(this.patientDetailEdit)
          );
        },
        err => {
          console.log(err);
        }
      );
  }

  deletePatient() {
    this.patientService
      .delete(this.patientDetail)
      .toPromise()
      .then(
        (p: any) => {
          this.modalReference.close();
          this.router.navigate(['/patient']);
        },
        err => {
          // alert error ;
          console.log(err);
        }
      );
  }

  getPatientAnnotations(patientDetail) {
    this.patientService
      .getAnnotations(patientDetail)
      .toPromise()
      .then(
        (result: any) => {
          this.annotations = result;
        },
        err => {
          console.log(err);
        }
      );
  }

  createAnnotation(annotation: any) {
    this.patientService
      .createAnnotation(annotation)
      .toPromise()
      .then(
        (result): any => {
          // TO DO
        },
        err => {
          console.log(err);
        }
      );
  }

  deleteAnnotation(annotation: any) {
    this.patientService
      .deleteAnnotation(annotation)
      .toPromise()
      .then(
        (result): any => {
          // TO DO
        },
        err => {
          console.log(err);
        }
      );
  }
}

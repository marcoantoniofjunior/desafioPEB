import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: any[] = [];

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
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          //this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
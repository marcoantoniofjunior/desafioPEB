import { Component, OnInit } from '@angular/core';
import { SchedulesService } from './schedules.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules: any[] = [];

  constructor(
    private schedulesService: SchedulesService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.listSchedules();
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

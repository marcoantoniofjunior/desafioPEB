import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalConsultationComponent } from './medicalConsultation.component';

describe('MedicalConsultationComponent', () => {
  let component: MedicalConsultationComponent;
  let fixture: ComponentFixture<MedicalConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

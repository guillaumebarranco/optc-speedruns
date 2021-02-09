import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRecordComponent } from './submit-record.component';

describe('SubmitRecordComponent', () => {
  let component: SubmitRecordComponent;
  let fixture: ComponentFixture<SubmitRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

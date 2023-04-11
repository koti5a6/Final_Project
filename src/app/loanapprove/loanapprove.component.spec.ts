import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapproveComponent } from './loanapprove.component';

describe('LoanapproveComponent', () => {
  let component: LoanapproveComponent;
  let fixture: ComponentFixture<LoanapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanapproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

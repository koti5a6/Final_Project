import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditapproveComponent } from './creditapprove.component';

describe('CreditapproveComponent', () => {
  let component: CreditapproveComponent;
  let fixture: ComponentFixture<CreditapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditapproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

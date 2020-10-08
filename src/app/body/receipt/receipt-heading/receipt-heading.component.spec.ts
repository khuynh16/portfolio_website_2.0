import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptHeadingComponent } from './receipt-heading.component';

describe('ReceiptHeadingComponent', () => {
  let component: ReceiptHeadingComponent;
  let fixture: ComponentFixture<ReceiptHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

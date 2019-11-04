import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcontactdetailsComponent } from './vendorcontactdetails.component';

describe('VendorcontactdetailsComponent', () => {
  let component: VendorcontactdetailsComponent;
  let fixture: ComponentFixture<VendorcontactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcontactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcontactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

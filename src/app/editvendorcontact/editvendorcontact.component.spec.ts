import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvendorcontactComponent } from './editvendorcontact.component';

describe('EditvendorcontactComponent', () => {
  let component: EditvendorcontactComponent;
  let fixture: ComponentFixture<EditvendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

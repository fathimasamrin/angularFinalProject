import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevendorcontactComponent } from './createvendorcontact.component';

describe('CreatevendorcontactComponent', () => {
  let component: CreatevendorcontactComponent;
  let fixture: ComponentFixture<CreatevendorcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatevendorcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatevendorcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

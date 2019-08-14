import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingproducsdetailsComponent } from './addingproducsdetails.component';

describe('AddingproducsdetailsComponent', () => {
  let component: AddingproducsdetailsComponent;
  let fixture: ComponentFixture<AddingproducsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingproducsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingproducsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingemplComponent } from './addingempl.component';

describe('AddingemplComponent', () => {
  let component: AddingemplComponent;
  let fixture: ComponentFixture<AddingemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

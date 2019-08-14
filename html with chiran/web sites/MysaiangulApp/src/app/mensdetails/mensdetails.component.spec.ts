import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensdetailsComponent } from './mensdetails.component';

describe('MensdetailsComponent', () => {
  let component: MensdetailsComponent;
  let fixture: ComponentFixture<MensdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

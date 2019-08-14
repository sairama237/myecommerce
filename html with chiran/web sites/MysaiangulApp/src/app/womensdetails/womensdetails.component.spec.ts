import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensdetailsComponent } from './womensdetails.component';

describe('WomensdetailsComponent', () => {
  let component: WomensdetailsComponent;
  let fixture: ComponentFixture<WomensdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

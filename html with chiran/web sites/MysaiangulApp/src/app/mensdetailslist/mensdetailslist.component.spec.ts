import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensdetailslistComponent } from './mensdetailslist.component';

describe('MensdetailslistComponent', () => {
  let component: MensdetailslistComponent;
  let fixture: ComponentFixture<MensdetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensdetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensdetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

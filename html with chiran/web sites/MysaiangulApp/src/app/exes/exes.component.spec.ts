import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExesComponent } from './exes.component';

describe('ExesComponent', () => {
  let component: ExesComponent;
  let fixture: ComponentFixture<ExesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailslistComponent } from './moviedetailslist.component';

describe('MoviedetailslistComponent', () => {
  let component: MoviedetailslistComponent;
  let fixture: ComponentFixture<MoviedetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

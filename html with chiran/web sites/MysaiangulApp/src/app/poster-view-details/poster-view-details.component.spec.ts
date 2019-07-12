import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterViewDetailsComponent } from './poster-view-details.component';

describe('PosterViewDetailsComponent', () => {
  let component: PosterViewDetailsComponent;
  let fixture: ComponentFixture<PosterViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

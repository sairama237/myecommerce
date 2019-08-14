import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslistComponent } from './pageslist.component';

describe('PageslistComponent', () => {
  let component: PageslistComponent;
  let fixture: ComponentFixture<PageslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

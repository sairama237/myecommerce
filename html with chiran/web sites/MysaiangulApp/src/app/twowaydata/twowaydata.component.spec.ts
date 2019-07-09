import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydataComponent } from './twowaydata.component';

describe('TwowaydataComponent', () => {
  let component: TwowaydataComponent;
  let fixture: ComponentFixture<TwowaydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstarp4dropComponent } from './bootstarp4drop.component';

describe('Bootstarp4dropComponent', () => {
  let component: Bootstarp4dropComponent;
  let fixture: ComponentFixture<Bootstarp4dropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bootstarp4dropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootstarp4dropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

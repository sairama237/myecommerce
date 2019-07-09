import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiComponent } from './sai.component';

describe('SaiComponent', () => {
  let component: SaiComponent;
  let fixture: ComponentFixture<SaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

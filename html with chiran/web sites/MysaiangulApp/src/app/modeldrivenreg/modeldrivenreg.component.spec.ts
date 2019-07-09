import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivenregComponent } from './modeldrivenreg.component';

describe('ModeldrivenregComponent', () => {
  let component: ModeldrivenregComponent;
  let fixture: ComponentFixture<ModeldrivenregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldrivenregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldrivenregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

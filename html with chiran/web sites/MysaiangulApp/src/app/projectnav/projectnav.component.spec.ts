import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectnavComponent } from './projectnav.component';

describe('ProjectnavComponent', () => {
  let component: ProjectnavComponent;
  let fixture: ComponentFixture<ProjectnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

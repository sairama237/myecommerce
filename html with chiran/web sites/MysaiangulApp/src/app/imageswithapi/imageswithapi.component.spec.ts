import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageswithapiComponent } from './imageswithapi.component';

describe('ImageswithapiComponent', () => {
  let component: ImageswithapiComponent;
  let fixture: ComponentFixture<ImageswithapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageswithapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageswithapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

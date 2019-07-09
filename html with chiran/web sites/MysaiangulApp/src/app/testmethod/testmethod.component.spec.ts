import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmethodComponent } from './testmethod.component';

describe('TestmethodComponent', () => {
  let component: TestmethodComponent;
  let fixture: ComponentFixture<TestmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

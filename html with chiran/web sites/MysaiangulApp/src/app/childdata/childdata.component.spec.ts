import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddataComponent } from './childdata.component';

describe('ChilddataComponent', () => {
  let component: ChilddataComponent;
  let fixture: ComponentFixture<ChilddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

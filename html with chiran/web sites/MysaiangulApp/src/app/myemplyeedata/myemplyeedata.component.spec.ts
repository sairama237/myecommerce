import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemplyeedataComponent } from './myemplyeedata.component';

describe('MyemplyeedataComponent', () => {
  let component: MyemplyeedataComponent;
  let fixture: ComponentFixture<MyemplyeedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemplyeedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemplyeedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudemplistdataComponent } from './crudemplistdata.component';

describe('CrudemplistdataComponent', () => {
  let component: CrudemplistdataComponent;
  let fixture: ComponentFixture<CrudemplistdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudemplistdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudemplistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

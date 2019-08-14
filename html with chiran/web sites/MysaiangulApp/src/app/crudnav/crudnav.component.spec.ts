import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudnavComponent } from './crudnav.component';

describe('CrudnavComponent', () => {
  let component: CrudnavComponent;
  let fixture: ComponentFixture<CrudnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

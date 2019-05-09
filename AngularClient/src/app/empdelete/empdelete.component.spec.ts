import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdeleteComponent } from './empdelete.component';

describe('EmpdeleteComponent', () => {
  let component: EmpdeleteComponent;
  let fixture: ComponentFixture<EmpdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

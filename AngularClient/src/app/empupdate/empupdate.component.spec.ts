import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpupdateComponent } from './empupdate.component';

describe('EmpupdateComponent', () => {
  let component: EmpupdateComponent;
  let fixture: ComponentFixture<EmpupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

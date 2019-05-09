import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpinsertComponent } from './empinsert.component';

describe('EmpinsertComponent', () => {
  let component: EmpinsertComponent;
  let fixture: ComponentFixture<EmpinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

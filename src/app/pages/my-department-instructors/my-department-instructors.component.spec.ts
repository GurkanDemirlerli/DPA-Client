import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDepartmentInstructorsComponent } from './my-department-instructors.component';

describe('MyDepartmentInstructorsComponent', () => {
  let component: MyDepartmentInstructorsComponent;
  let fixture: ComponentFixture<MyDepartmentInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDepartmentInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDepartmentInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

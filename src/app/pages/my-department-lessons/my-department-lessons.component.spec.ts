import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDepartmentLessonsComponent } from './my-department-lessons.component';

describe('MyDepartmentLessonsComponent', () => {
  let component: MyDepartmentLessonsComponent;
  let fixture: ComponentFixture<MyDepartmentLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDepartmentLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDepartmentLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

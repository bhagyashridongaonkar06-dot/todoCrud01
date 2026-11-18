import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCrud01Component } from './student-crud01.component';

describe('StudentCrud01Component', () => {
  let component: StudentCrud01Component;
  let fixture: ComponentFixture<StudentCrud01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCrud01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCrud01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

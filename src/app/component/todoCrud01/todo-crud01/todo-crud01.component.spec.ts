import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCrud01Component } from './todo-crud01.component';

describe('TodoCrud01Component', () => {
  let component: TodoCrud01Component;
  let fixture: ComponentFixture<TodoCrud01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCrud01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCrud01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

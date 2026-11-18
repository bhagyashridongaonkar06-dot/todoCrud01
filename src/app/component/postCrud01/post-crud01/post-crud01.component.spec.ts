import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCrud01Component } from './post-crud01.component';

describe('PostCrud01Component', () => {
  let component: PostCrud01Component;
  let fixture: ComponentFixture<PostCrud01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCrud01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCrud01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

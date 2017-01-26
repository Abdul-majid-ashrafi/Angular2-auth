/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserGetResumeComponent } from './user-get-resume.component';

describe('UserGetResumeComponent', () => {
  let component: UserGetResumeComponent;
  let fixture: ComponentFixture<UserGetResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

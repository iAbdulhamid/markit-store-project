import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptordersPage } from './acceptorders.page';

describe('AcceptordersPage', () => {
  let component: AcceptordersPage;
  let fixture: ComponentFixture<AcceptordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptordersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

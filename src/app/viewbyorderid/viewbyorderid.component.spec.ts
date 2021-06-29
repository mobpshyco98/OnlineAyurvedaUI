import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyorderidComponent } from './viewbyorderid.component';

describe('ViewbyorderidComponent', () => {
  let component: ViewbyorderidComponent;
  let fixture: ComponentFixture<ViewbyorderidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbyorderidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyorderidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

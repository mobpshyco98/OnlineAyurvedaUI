import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedicinebycategoryComponent } from './viewmedicinebycategory.component';

describe('ViewmedicinebycategoryComponent', () => {
  let component: ViewmedicinebycategoryComponent;
  let fixture: ComponentFixture<ViewmedicinebycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedicinebycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedicinebycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustomercartComponent } from './getcustomercart.component';

describe('GetcustomercartComponent', () => {
  let component: GetcustomercartComponent;
  let fixture: ComponentFixture<GetcustomercartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustomercartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustomercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

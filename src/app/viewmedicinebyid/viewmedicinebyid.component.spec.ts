import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedicinebyidComponent } from './viewmedicinebyid.component';

describe('ViewmedicinebyidComponent', () => {
  let component: ViewmedicinebyidComponent;
  let fixture: ComponentFixture<ViewmedicinebyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedicinebyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedicinebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

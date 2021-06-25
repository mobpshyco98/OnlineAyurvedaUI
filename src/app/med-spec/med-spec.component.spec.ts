import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedSpecComponent } from './med-spec.component';

describe('MedSpecComponent', () => {
  let component: MedSpecComponent;
  let fixture: ComponentFixture<MedSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedSpecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

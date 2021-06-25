import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedSpecsComponent } from './add-med-specs.component';

describe('AddMedSpecsComponent', () => {
  let component: AddMedSpecsComponent;
  let fixture: ComponentFixture<AddMedSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

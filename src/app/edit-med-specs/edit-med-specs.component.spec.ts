import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedSpecsComponent } from './edit-med-specs.component';

describe('EditMedSpecsComponent', () => {
  let component: EditMedSpecsComponent;
  let fixture: ComponentFixture<EditMedSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

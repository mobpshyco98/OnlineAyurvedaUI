import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmedbycatComponent } from './addmedbycat.component';

describe('AddmedbycatComponent', () => {
  let component: AddmedbycatComponent;
  let fixture: ComponentFixture<AddmedbycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedbycatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmedbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedspecbyidComponent } from './viewmedspecbyid.component';

describe('ViewmedspecbyidComponent', () => {
  let component: ViewmedspecbyidComponent;
  let fixture: ComponentFixture<ViewmedspecbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmedspecbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmedspecbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

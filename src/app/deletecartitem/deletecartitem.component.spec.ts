import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecartitemComponent } from './deletecartitem.component';

describe('DeletecartitemComponent', () => {
  let component: DeletecartitemComponent;
  let fixture: ComponentFixture<DeletecartitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecartitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecartitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

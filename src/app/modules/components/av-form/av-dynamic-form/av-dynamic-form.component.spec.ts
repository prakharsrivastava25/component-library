import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvDynamicFormComponent } from './av-dynamic-form.component';

describe('AvDynamicFormComponent', () => {
  let component: AvDynamicFormComponent;
  let fixture: ComponentFixture<AvDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

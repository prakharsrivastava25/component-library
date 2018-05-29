import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvCheckboxesComponent } from './av-checkboxes.component';

describe('AvCheckboxesComponent', () => {
  let component: AvCheckboxesComponent;
  let fixture: ComponentFixture<AvCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

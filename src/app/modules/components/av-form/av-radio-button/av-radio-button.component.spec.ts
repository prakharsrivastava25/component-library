import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvRadioButtonComponent } from './av-radio-button.component';

describe('AvRadioButtonComponent', () => {
  let component: AvRadioButtonComponent;
  let fixture: ComponentFixture<AvRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

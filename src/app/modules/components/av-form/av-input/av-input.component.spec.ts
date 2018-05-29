import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvInputComponent } from './av-input.component';

describe('AvInputComponent', () => {
  let component: AvInputComponent;
  let fixture: ComponentFixture<AvInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

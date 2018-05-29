import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvLabelComponent } from './av-label.component';

describe('AvLabelComponent', () => {
  let component: AvLabelComponent;
  let fixture: ComponentFixture<AvLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

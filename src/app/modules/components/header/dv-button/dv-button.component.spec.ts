import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvButtonComponent } from './dv-button.component';

describe('DvButtonComponent', () => {
  let component: DvButtonComponent;
  let fixture: ComponentFixture<DvButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

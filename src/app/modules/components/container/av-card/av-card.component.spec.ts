import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvCardComponent } from './av-card.component';

describe('AvCardComponent', () => {
  let component: AvCardComponent;
  let fixture: ComponentFixture<AvCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

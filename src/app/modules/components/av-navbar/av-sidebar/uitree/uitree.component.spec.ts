import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitreeComponent } from './uitree.component';

describe('UitreeComponent', () => {
  let component: UitreeComponent;
  let fixture: ComponentFixture<UitreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

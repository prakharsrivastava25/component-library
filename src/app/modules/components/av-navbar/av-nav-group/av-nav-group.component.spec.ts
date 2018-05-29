import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvNavGroupComponent } from './av-nav-group.component';

describe('AvNavGroupComponent', () => {
  let component: AvNavGroupComponent;
  let fixture: ComponentFixture<AvNavGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvNavGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvNavGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvNavItemComponent } from './av-nav-item.component';

describe('AvNavItemComponent', () => {
  let component: AvNavItemComponent;
  let fixture: ComponentFixture<AvNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

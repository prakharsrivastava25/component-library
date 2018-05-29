import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvNavBarComponent } from './av-nav-bar.component';

describe('AvNavBarComponent', () => {
  let component: AvNavBarComponent;
  let fixture: ComponentFixture<AvNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

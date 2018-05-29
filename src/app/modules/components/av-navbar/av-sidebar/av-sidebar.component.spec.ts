import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvSidebarComponent } from './av-sidebar.component';

describe('AvSidebarComponent', () => {
  let component: AvSidebarComponent;
  let fixture: ComponentFixture<AvSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

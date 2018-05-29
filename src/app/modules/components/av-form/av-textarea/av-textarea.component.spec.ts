import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvTextareaComponent } from './av-textarea.component';

describe('AvTextareaComponent', () => {
  let component: AvTextareaComponent;
  let fixture: ComponentFixture<AvTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

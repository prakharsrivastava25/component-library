import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvFormStructureComponent } from './av-form-structure.component';

describe('AvFormStructureComponent', () => {
  let component: AvFormStructureComponent;
  let fixture: ComponentFixture<AvFormStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvFormStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvFormStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnOffsetComponent } from './column-offset.component';

describe('ColumnOffsetComponent', () => {
  let component: ColumnOffsetComponent;
  let fixture: ComponentFixture<ColumnOffsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnOffsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

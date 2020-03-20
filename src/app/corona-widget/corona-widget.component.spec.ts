import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaWidgetComponent } from './corona-widget.component';

describe('CoronaWidgetComponent', () => {
  let component: CoronaWidgetComponent;
  let fixture: ComponentFixture<CoronaWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

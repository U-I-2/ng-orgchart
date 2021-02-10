import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultChartComponent } from './default-chart.component';

describe('DefaultChartComponent', () => {
  let component: DefaultChartComponent;
  let fixture: ComponentFixture<DefaultChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

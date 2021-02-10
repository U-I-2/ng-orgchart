import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PanZoomChartComponent } from './pan-zoom-chart.component';

describe('PanZoomChartComponent', () => {
  let component: PanZoomChartComponent;
  let fixture: ComponentFixture<PanZoomChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PanZoomChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanZoomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

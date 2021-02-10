import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomNodeTemplateChartComponent } from './custom-node-template-chart.component';

describe('CustomNodeTemplateChartComponent', () => {
  let component: CustomNodeTemplateChartComponent;
  let fixture: ComponentFixture<CustomNodeTemplateChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNodeTemplateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNodeTemplateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

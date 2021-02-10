import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditChartComponent } from './edit-chart.component';

describe('EditChartComponent', () => {
  let component: EditChartComponent;
  let fixture: ComponentFixture<EditChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

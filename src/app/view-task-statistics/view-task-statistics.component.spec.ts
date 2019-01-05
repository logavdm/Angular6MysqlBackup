import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskStatisticsComponent } from './view-task-statistics.component';

describe('ViewTaskStatisticsComponent', () => {
  let component: ViewTaskStatisticsComponent;
  let fixture: ComponentFixture<ViewTaskStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

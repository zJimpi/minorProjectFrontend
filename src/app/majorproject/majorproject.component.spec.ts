import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorprojectComponent } from './majorproject.component';

describe('MajorprojectComponent', () => {
  let component: MajorprojectComponent;
  let fixture: ComponentFixture<MajorprojectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MajorprojectComponent]
    });
    fixture = TestBed.createComponent(MajorprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

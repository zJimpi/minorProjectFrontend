import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestFormComponent } from './dest-form.component';

describe('DestFormComponent', () => {
  let component: DestFormComponent;
  let fixture: ComponentFixture<DestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestFormComponent]
    });
    fixture = TestBed.createComponent(DestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

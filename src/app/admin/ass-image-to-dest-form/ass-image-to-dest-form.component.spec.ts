import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssImageToDestFormComponent } from './ass-image-to-dest-form.component';

describe('AssImageToDestFormComponent', () => {
  let component: AssImageToDestFormComponent;
  let fixture: ComponentFixture<AssImageToDestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssImageToDestFormComponent]
    });
    fixture = TestBed.createComponent(AssImageToDestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

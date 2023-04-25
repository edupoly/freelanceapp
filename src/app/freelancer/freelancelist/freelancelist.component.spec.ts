import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancelistComponent } from './freelancelist.component';

describe('FreelancelistComponent', () => {
  let component: FreelancelistComponent;
  let fixture: ComponentFixture<FreelancelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

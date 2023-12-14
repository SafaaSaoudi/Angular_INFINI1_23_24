import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceItemComponent } from './residence-item.component';

describe('ResidenceItemComponent', () => {
  let component: ResidenceItemComponent;
  let fixture: ComponentFixture<ResidenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

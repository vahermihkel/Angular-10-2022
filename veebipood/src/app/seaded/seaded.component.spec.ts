import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeadedComponent } from './seaded.component';

describe('SeadedComponent', () => {
  let component: SeadedComponent;
  let fixture: ComponentFixture<SeadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeadedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

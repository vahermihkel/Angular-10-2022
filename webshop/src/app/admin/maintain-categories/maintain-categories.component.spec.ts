import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainCategoriesComponent } from './maintain-categories.component';

describe('MaintainCategoriesComponent', () => {
  let component: MaintainCategoriesComponent;
  let fixture: ComponentFixture<MaintainCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintainCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintainCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

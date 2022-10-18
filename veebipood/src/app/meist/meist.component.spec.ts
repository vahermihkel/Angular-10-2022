import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeistComponent } from './meist.component';

describe('MeistComponent', () => {
  let component: MeistComponent;
  let fixture: ComponentFixture<MeistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

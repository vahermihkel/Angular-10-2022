import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValitudComponent } from './valitud.component';

describe('ValitudComponent', () => {
  let component: ValitudComponent;
  let fixture: ComponentFixture<ValitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle4 } from './detalle4';

describe('Detalle4', () => {
  let component: Detalle4;
  let fixture: ComponentFixture<Detalle4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalle4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

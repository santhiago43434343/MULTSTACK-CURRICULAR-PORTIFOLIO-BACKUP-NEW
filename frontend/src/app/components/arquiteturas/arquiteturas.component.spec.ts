import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arquiteturas } from './arquiteturas.component';

describe('Arquiteturas', () => {
  let component: Arquiteturas;
  let fixture: ComponentFixture<Arquiteturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arquiteturas],
    }).compileComponents();

    fixture = TestBed.createComponent(Arquiteturas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

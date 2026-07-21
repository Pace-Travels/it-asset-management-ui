import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashabord } from './dashabord';

describe('Dashabord', () => {
  let component: Dashabord;
  let fixture: ComponentFixture<Dashabord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashabord],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashabord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

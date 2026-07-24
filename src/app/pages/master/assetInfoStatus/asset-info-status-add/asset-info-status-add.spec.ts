import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoStatusAdd } from './asset-info-status-add';

describe('AssetInfoStatusAdd', () => {
  let component: AssetInfoStatusAdd;
  let fixture: ComponentFixture<AssetInfoStatusAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoStatusAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoStatusAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoAdd } from './asset-info-add';

describe('AssetInfoAdd', () => {
  let component: AssetInfoAdd;
  let fixture: ComponentFixture<AssetInfoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

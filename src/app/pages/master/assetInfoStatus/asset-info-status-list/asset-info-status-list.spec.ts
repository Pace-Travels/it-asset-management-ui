import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoStatusList } from './asset-info-status-list';

describe('AssetInfoStatusList', () => {
  let component: AssetInfoStatusList;
  let fixture: ComponentFixture<AssetInfoStatusList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoStatusList],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoStatusList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

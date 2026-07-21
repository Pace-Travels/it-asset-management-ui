import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoList } from './asset-info-list';

describe('AssetInfoList', () => {
  let component: AssetInfoList;
  let fixture: ComponentFixture<AssetInfoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoList],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

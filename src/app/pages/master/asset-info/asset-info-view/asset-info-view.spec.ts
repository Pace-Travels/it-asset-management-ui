import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoView } from './asset-info-view';

describe('AssetInfoView', () => {
  let component: AssetInfoView;
  let fixture: ComponentFixture<AssetInfoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoView],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

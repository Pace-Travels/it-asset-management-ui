import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoStatusEdit } from './asset-info-status-edit';

describe('AssetInfoStatusEdit', () => {
  let component: AssetInfoStatusEdit;
  let fixture: ComponentFixture<AssetInfoStatusEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoStatusEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoStatusEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

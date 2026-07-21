import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoEdit } from './asset-info-edit';

describe('AssetInfoEdit', () => {
  let component: AssetInfoEdit;
  let fixture: ComponentFixture<AssetInfoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetInfoEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetInfoEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

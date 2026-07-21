import { Component, inject } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-info-view',
  imports: [PageHeader],
  templateUrl: './asset-info-view.html',
  styleUrl: './asset-info-view.scss',
})
export class AssetInfoView {

  private location = inject(Location);

  goBack() {

    this.location.back();

  }

  asset = {

    assetCode: 'AST-10001',

    assetName: 'Dell Latitude 5450',

    category: 'Laptop',

    assetType: 'Office Laptop',

    brand: 'Dell',

    model: 'Latitude 5450',

    serialNumber: 'DL123456789',

    status: 'Active',

    vendor: 'Dell India',

    purchaseDate: '15-Jun-2026',

    purchaseCost: '₹75,000',

    invoiceNumber: 'INV-1001',

    warrantyStart: '15-Jun-2026',

    warrantyEnd: '15-Jun-2029',

    employee: 'Rahul Sharma',

    department: 'IT',

    location: 'Bangalore',

    condition: 'Good',

    assignedDate: '18-Jun-2026',

    remarks: 'Assigned for development work.'

  };

}

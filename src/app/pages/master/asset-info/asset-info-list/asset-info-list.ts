import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { TableToolbar } from '../../../shared/components/table-toolbar/table-toolbar';
import { Router } from '@angular/router';
import { EmptyState } from '../../../shared/components/empty-state/empty-state';
import { ConfirmationDialog } from '../../../shared/components/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-asset-info-list',
  // standalone: true,
  imports: [CommonModule, PageHeader, TableToolbar, EmptyState, ConfirmationDialog],
  templateUrl: './asset-info-list.html',
  styleUrl: './asset-info-list.scss',
})
export class AssetInfoList {
  constructor(private router: Router) { }


  assets = [
    {
      id: 1,
      assetCode: 'AST001',
      assetName: 'Dell Latitude 5440',
      category: 'Laptop',
      brand: 'Dell',
      assignedTo: 'Rahul Sharma',
      status: 'Active'
    },
    {
      id: 2,
      assetCode: 'AST002',
      assetName: 'HP ProDesk 600',
      category: 'Desktop',
      brand: 'HP',
      assignedTo: 'Nagesh',
      status: 'Repair'
    }
  ];


  editAsset(id: string) {
    this.router.navigate(['/asset-info/edit', id]);
  }

  viewAsset(id: number) {
    this.router.navigate(['/asset-info/view', id]);
  }

  filteredAssets = [...this.assets];

  searchAsset(value: string) {

    const search = value.toLowerCase();

    this.filteredAssets = this.assets.filter(asset =>
      asset.assetCode.toLowerCase().includes(search) ||
      asset.assetName.toLowerCase().includes(search) ||
      asset.category.toLowerCase().includes(search) ||
      asset.brand.toLowerCase().includes(search)
    );

  }

  addAsset() {

    this.router.navigate(['/asset-info/add']);

  }

  showDeleteDialog = false;

  selectedAsset: any = null;

  isDeleting = false;

  openDeleteDialog(asset: any): void {

    this.selectedAsset = asset;

    this.showDeleteDialog = true;

  }

  closeDeleteDialog(): void {

    this.showDeleteDialog = false;

    this.selectedAsset = null;

  }

  deleteAsset(): void {

    if (!this.selectedAsset) {
    return;
  }

  this.isDeleting = true;

  setTimeout(() => {

    this.assets = this.assets.filter(
      x => x.id !== this.selectedAsset.id
    );

    // Table bhi update karo
    this.filteredAssets = [...this.assets];

    this.isDeleting = false;

    this.closeDeleteDialog();

    // Toast baad me add karenge

    console.log('Asset Deleted Successfully');

  }, 800);

  }
}

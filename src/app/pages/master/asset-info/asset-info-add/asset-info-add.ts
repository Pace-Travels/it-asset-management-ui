import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { ValidationMessage } from '../../../shared/components/validation-message/validation-message';

@Component({
  selector: 'app-asset-info-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeader, ValidationMessage],
  templateUrl: './asset-info-add.html',
  styleUrl: './asset-info-add.scss',
})
export class AssetInfoAdd {

  assetForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.assetForm = this.fb.group({

       assetCode: ['', Validators.required],

  assetName: ['', Validators.required],

  category: ['', Validators.required],

  assetType: ['', Validators.required],

  brand: ['', Validators.required],

  model: [''],

  serialNumber: [''],

  status: ['Active', Validators.required],

  vendor: ['', Validators.required],

  purchaseDate: ['', Validators.required],

  purchaseCost: [''],

  invoiceNumber: [''],

  warrantyStart: [''],

  warrantyEnd: [''],

  employee: [''],

  department: [''],

  location: [''],

  condition: ['Good'],

  assignedDate: [''],

  assetValue: ['']

    });

  }

  submitted = false;

  save() {

    this.submitted = true;

    if (this.assetForm.invalid) {

        this.assetForm.markAllAsTouched();

        return;

    }

    console.log(this.assetForm.value);

  }
  private location = inject(Location);

  goBack() {

    this.location.back();

  }


  isInvalid(controlName: string): boolean {

  const control = this.assetForm.get(controlName);

  return !!(
    control &&
    control.invalid &&
    (control.touched || this.submitted)
  );

}
}

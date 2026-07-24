import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessage } from '../../../shared/components/validation-message/validation-message';
import { AssetInfoStatusService } from '../../../../core/services/master/asset-info-status.service.ts';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-asset-info-status-add',
  imports: [CommonModule, PageHeader, ReactiveFormsModule, ValidationMessage],
  templateUrl: './asset-info-status-add.html',
  styleUrl: './asset-info-status-add.scss',
})
export class AssetInfoStatusAdd {

  assetInfoStatusForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private assetInfoStatusService: AssetInfoStatusService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {

    this.assetInfoStatusForm = this.fb.group({

      name: ['', Validators.required],
      description: ['']
    });

  }

  submitted = false;

  save(): void {

    this.submitted = true;

    if (this.assetInfoStatusForm.invalid) {

      this.assetInfoStatusForm.markAllAsTouched();

      return;

    }

    const payload = {

      name: this.assetInfoStatusForm.value.name,
      description: this.assetInfoStatusForm.value.description

    };

    this.assetInfoStatusService.add(payload).subscribe({

      next: (response) => {

        if (response.success) {

          this.messageService.add({

            severity: 'success',

            summary: 'Success',

            detail: response.message

          });
          this.router.navigate(['/asset-info-status']);

        } else {

          this.messageService.add({

            severity: 'error',

            summary: 'Error',

            detail: response.message

          });

        }

      },

      error: (error) => {

        this.messageService.add({

          severity: 'error',

          summary: 'Error',

          detail: error?.error?.message || 'Something went wrong.'

        });

      }

    });

  }
  private location = inject(Location);

  goBack() {

    this.location.back();

  }


  isInvalid(controlName: string): boolean {

    const control = this.assetInfoStatusForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      (control.touched || this.submitted)
    );

  }

}

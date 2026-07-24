import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationMessage } from '../../../shared/components/validation-message/validation-message';
import { AssetInfoStatusService } from '../../../../core/services/master/asset-info-status.service.ts';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-asset-info-status-edit',
  imports: [CommonModule, PageHeader, ReactiveFormsModule, ValidationMessage],
  templateUrl: './asset-info-status-edit.html',
  styleUrl: './asset-info-status-edit.scss',
})
export class AssetInfoStatusEdit {

  assetInfoStatusForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private assetInfoStatusService: AssetInfoStatusService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  assetId!: number;

  ngOnInit() {

    this.assetInfoStatusForm = this.fb.group({

      name: ['', Validators.required],
      description: ['']
    });

    this.route.params.subscribe(params => {

      this.assetId = Number(params['id']);

      if (this.assetId) {

        this.getAssetInfoData();

      }

    });

  }

  getAssetInfoData(): void {

    this.assetInfoStatusService
      .getAssetInfoData(this.assetId)
      .subscribe({

        next: (response) => {
          console.log(response)
          if (response.success) {

            this.assetInfoStatusForm.patchValue({

              name: response.data.name,

              description: response.data.description

            });

          }

        },

        error: (error) => {

          console.error(error);

        }

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

    // Edit Mode
    if (this.assetId) {

      this.assetInfoStatusService
        .update(this.assetId, payload)
        .subscribe({

          next: (response) => {

            if (response.success) {

              this.messageService.add({

                severity: 'success',

                summary: 'Success',

                detail: response.message

              });

              setTimeout(() => {

                this.router.navigate([
                  '/asset-info-status'
                ]);

              }, 1000);

            }
            else {

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

    // Add Mode
    else {

      this.assetInfoStatusService
        .add(payload)
        .subscribe({

          next: (response) => {

            if (response.success) {

              this.messageService.add({

                severity: 'success',

                summary: 'Success',

                detail: response.message

              });

              this.router.navigate(['/asset-info-status']);

            }
            else {

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

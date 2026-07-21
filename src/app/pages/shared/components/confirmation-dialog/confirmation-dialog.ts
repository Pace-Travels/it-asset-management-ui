import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.scss'
})
export class ConfirmationDialog {

  @Input() visible = false;

  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title = 'Confirmation';

  @Input() message = '';

  @Input() itemName = '';

  @Input() itemCode = '';

  @Input() loading = false;

  @Input() confirmButtonText = 'Delete';

  @Input() cancelButtonText = 'Cancel';

  @Output() confirm = new EventEmitter<void>();

  @Output() cancel = new EventEmitter<void>();

  close(): void {

    this.visible = false;

    this.visibleChange.emit(false);

    this.cancel.emit();

  }

  onConfirm(): void {

    this.confirm.emit();

  }

}
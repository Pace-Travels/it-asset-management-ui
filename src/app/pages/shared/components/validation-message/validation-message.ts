import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [],
  templateUrl: './validation-message.html',
  styleUrl: './validation-message.scss',
})
export class ValidationMessage {

  @Input() control!: AbstractControl | null;

  @Input() label = '';

  get showError(): boolean {

    return !!(
      this.control &&
      this.control.invalid &&
      (this.control.touched || this.control.dirty)
    );

  }

}

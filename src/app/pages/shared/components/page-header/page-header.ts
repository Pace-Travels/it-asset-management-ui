import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {

  @Input() title = '';

  @Input() subtitle = '';

  @Input() buttonText = '';

  @Input() showButton = true;

  @Input() showBackButton = false;

  @Output() buttonClick = new EventEmitter<void>();

  @Output() backClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }

  onBackClick() {
    this.backClick.emit();
  }

}

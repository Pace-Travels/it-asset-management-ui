import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbService } from '../../core/services/breadcrumb-services';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {

  breadcrumbs$: Observable<any>;

  constructor(private breadcrumbService: BreadcrumbService) {

    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;

  }

}
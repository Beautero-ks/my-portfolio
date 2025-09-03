import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center" [class]="containerClass">
      <div class="animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" 
           [style.width.px]="size"
           [style.height.px]="size">
      </div>
      <span *ngIf="text" class="ml-3 text-gray-600">{{ text }}</span>
    </div>
  `,
  styles: ``
})
export class LoadingSpinner {
  @Input() size: number = 32;
  @Input() text: string = '';
  @Input() containerClass: string = 'p-4';
}

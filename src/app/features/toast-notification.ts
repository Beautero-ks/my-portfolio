import { Component } from '@angular/core';
import { Toast, ToastService } from '../core/service/toast-notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-notification',
  imports: [CommonModule],
  template: `
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <div *ngFor="let toast of toastService.toasts$ | async; trackBy: trackByFn"
           class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto transform transition-all duration-300 ease-in-out"
           [ngClass]="getToastClasses(toast.type)"
           [@slideIn]>
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <ng-container [ngSwitch]="toast.type">
                <svg *ngSwitchCase="'success'" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg *ngSwitchCase="'error'" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg *ngSwitchCase="'warning'" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <svg *ngSwitchDefault class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </ng-container>
            </div>
            <div class="ml-3 w-0 flex-1">
              <p class="text-sm font-medium text-gray-900">
                {{ toast.message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                      (click)="toastService.remove(toast.id)">
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class ToastNotification {
  constructor(public toastService: ToastService) {}

  trackByFn(index: number, item: Toast): string {
    return item.id;
  }

  getToastClasses(type: Toast['type']): string {
    const baseClasses = 'border-l-4 ';
    const typeClasses = {
      success: 'border-green-400 bg-green-50',
      error: 'border-red-400 bg-red-50',
      warning: 'border-yellow-400 bg-yellow-50',
      info: 'border-blue-400 bg-blue-50'
    };
    return baseClasses + typeClasses[type];
  }
}

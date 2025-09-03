import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() text: string = 'Click';
  @Input() color: 'primary' | 'secondary' | 'accent' = 'primary';
  @Output() btnClick = new EventEmitter<void>();

}

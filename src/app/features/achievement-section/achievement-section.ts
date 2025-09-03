import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievement-section',
  imports: [CommonModule],
  templateUrl: './achievement-section.html',
  styleUrl: './achievement-section.scss'
})
export class AchievementSection {
  achievements = [
    { title: 'Angular Certified Developer', issuer: 'Angular', date: 'Jan 2025' },
    { title: 'Full Stack Web Development', issuer: 'Coursera', date: 'Dec 2024' }
  ];

  ngOnInit() {}
}

import { Component, Input } from '@angular/core';
import { achievementSection } from '../../../../data';
import { CommonModule } from '@angular/common';

interface FooterLink { name: string; url: string; }
interface AchievementCard {
  title: string;
  subtitle?: string;
  description?: string;
  issuer?: string;   // e.g., "Coursera"
  date?: string;     // e.g., "Aug 2025"
  image?: string;
  image_alt?: string;
  footer_link?: FooterLink[];
}

@Component({
  selector: 'app-achievement',
  imports: [CommonModule],
  templateUrl: './achievement.html',
  styleUrl: './achievement.scss'
})
export class Achievement {
  achievementData = achievementSection;

  // You can pass a custom list; if not provided we fallback to constants.
  @Input() cards: AchievementCard[] | null = null;

  heading = achievementSection.title;
  subheading = achievementSection.subtitle;

  get list(): AchievementCard[] {
    const base = (this.cards ?? achievementSection.achievements_cards) as AchievementCard[];
    // Default issuer to Coursera when missing
    return base.map(c => ({ issuer: 'Coursera', ...c }));
  }

  trackByTitle(_i: number, item: AchievementCard) {
    return item.title;
  }
}

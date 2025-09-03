import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { introduction, myJourney, skillsSection } from '../../../data';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  skillsData = skillsSection;
  journeyData = myJourney;
  resumeLink = introduction.resumeLink;

  ngOnInit(): void {
    // Add entrance animations
    this.animateOnScroll();
  }

  private animateOnScroll(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    // Observe all animatable elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
  }
}

import { Component, Input } from '@angular/core';
import { skillsSection } from '../../../data';
import { CommonModule } from '@angular/common';

interface SkillProficiency {
  skill: string;
  level: number;
}

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.scss'
})
export class Skill {
  @Input() skill: string = '';

  skillsData = skillsSection;
  
  frontendSkills = [
    { skillName: 'Angular', badgeURL: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
    { skillName: 'TypeScript', badgeURL: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
    { skillName: 'JavaScript', badgeURL: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' },
    { skillName: 'HTML5', badgeURL: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
    { skillName: 'CSS3', badgeURL: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
    { skillName: 'Tailwind CSS', badgeURL: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
    { skillName: 'Next.js', badgeURL: 'https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white'}
  ];

  backendSkills = [
    { 
  skillName: 'Node.js', 
  badgeURL: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=nodedotjs&logoColor=white' 
},
{ 
  skillName: 'MongoDB', 
  badgeURL: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' 
},
{ 
  skillName: 'Git', 
  badgeURL: 'https://img.shields.io/badge/Git-E44C30?style=for-the-badge&logo=git&logoColor=white' 
},
{ 
  skillName: 'Express.js', 
  badgeURL: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' 
},
{ 
  skillName: 'PostgreSQL', 
  badgeURL: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' 
},
    { skillName: 'Docker', badgeURL: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' },
    { skillName: 'Laravel',badgeURL: 'https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white'},
  { skillName: 'Spring Boot', badgeURL: 'https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white'}

  ];

  skillProficiencies: SkillProficiency[] = [
    { skill: 'Angular/TypeScript', level: 90 },
    { skill: 'JavaScript/ES6+', level: 85 },
    { skill: 'HTML/CSS', level: 95 },
    { skill: 'Node.js/Express', level: 80 },
    { skill: 'MongoDB/PostgreSQL', level: 75 },
    { skill: 'Git/Version Control', level: 90 },
    { skill: 'Responsive Design', level: 90 },
    { skill: 'API Development', level: 80 }
  ];

  currentlyLearning: string[] = [
    'React.js', 'Python', 'AWS', 'GraphQL', 'Docker', 'Kubernetes', 'Machine Learning', 'GitLab', 'Jenkins', 'Ansible'
  ];

  ngOnInit(): void {
    this.animateProficiencyBars();
  }

  private animateProficiencyBars(): void {
    setTimeout(() => {
      const bars = document.querySelectorAll('.proficiency-bar');
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-width');
        if (targetWidth) {
          (bar as HTMLElement).style.width = targetWidth + '%';
        }
      });
    }, 500);
  }

  onImageError(event: any, skill: any): void {
    // Fallback for broken badge images
    event.target.src = `https://via.placeholder.com/150x50/3B82F6/white?text=${encodeURIComponent(skill.skillName)}`;
  }
}


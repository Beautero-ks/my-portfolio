import { Component, OnInit } from '@angular/core';
import { introduction, socialMediaLinks } from "../../data";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Router } from '@angular/router';
import { ToastService } from '../core/service/toast-notification';
import { AnalyticsService } from '../core/service/analytics';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
  animations: [
    trigger('typewriter', [
      state('start', style({ width: '0%' })),
      state('end', style({ width: '100%' })),
      transition('start => end', animate('2s steps(10)'))
    ])
  ]
})
export class Introduction implements OnInit{
  // constructor(private router: Router) {}
  // typewriterState = 'start';
  // greeting = introduction;
  // ngOnInit() {
  //   setTimeout(() => this.typewriterState = 'end', 100);
  // }
  // navigateToProjects() {
  //   this.router.navigate(['/projects']);
  // }

private destroy$ = new Subject<void>();

  greeting = introduction;
  socialLinks = socialMediaLinks;
  typewriterState = 'start';
  isImageLoaded = false;
  isResumeDownloading = false;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.typewriterState = 'end', 100);
    this.analyticsService.trackPageView('Introduction');
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateToProjects(): void {
    this.analyticsService.trackProjectNavigation();
    this.router.navigate(['/projects']);
  }

  onImageLoad(): void {
    this.isImageLoaded = true;
  }

  formatSubtitle(subtitle: string): string {
    return subtitle
      .replace(/\n/g, '<br>')
      .replace(/👨‍💻/g, '<span class="inline-block animate-pulse">👨‍💻</span>')
      .replace(/🛠️/g, '<span class="inline-block hover:animate-spin cursor-pointer">🛠️</span>')
      .replace(/❤️/g, '<span class="inline-block animate-pulse text-red-400">❤️</span>');
  }

  downloadResume(): void {
    this.isResumeDownloading = true;
    this.analyticsService.trackResumeDownload();
    this.toastService.success('Resume download started! 📄');
    
    // Reset downloading state after a delay
    setTimeout(() => {
      this.isResumeDownloading = false;
    }, 2000);
  }

  trackSocialClick(platform: string): void {
    this.analyticsService.trackSocialClick(platform);
    this.toastService.info(`Opening ${platform} profile...`);
  }
}


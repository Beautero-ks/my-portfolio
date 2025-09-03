import { Injectable } from '@angular/core';
declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  
  trackEvent(eventName: string, properties?: any): void {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    
    // Console log for development
    console.log('Analytics Event:', eventName, properties);
  }

  trackResumeDownload(): void {
    this.trackEvent('resume_download', {
      event_category: 'engagement',
      event_label: 'resume_download'
    });
  }

  trackSocialClick(platform: string): void {
    this.trackEvent('social_click', {
      event_category: 'social_media',
      event_label: platform.toLowerCase()
    });
  }

  trackProjectNavigation(): void {
    this.trackEvent('navigation', {
      event_category: 'engagement',
      event_label: 'projects_page'
    });
  }

  trackPageView(pageName: string): void {
    this.trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
}
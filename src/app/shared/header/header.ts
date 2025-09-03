import { OnDestroy, OnInit, Component, inject, HostListener } from '@angular/core';
import { Theme } from '../../core/service/theme';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { AnalyticsService } from '../../core/service/analytics';

interface NavigationItem {
  label: string;
  route: string;
  icon: string;
  description?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public themeService = inject(Theme);
  private analyticsService = inject(AnalyticsService);
  private router = inject(Router);

  isMobileMenuOpen = false;
  scrollProgress = 0;
  isScrolled = false;

  navigationItems: NavigationItem[] = [
    { 
      label: 'Home', 
      route: '/', 
      icon: 'home',
      description: 'Back to homepage' 
    },
    { 
      label: 'About', 
      route: '/about', 
      icon: 'about',
      description: 'About me' 
    },
    { 
      label: 'Projects', 
      route: '/projects', 
      icon: 'projects',
      description: 'View my portfolio projects' 
    },
    { 
      label: 'Blog', 
      route: '/blog', 
      icon: 'blog',
      description: 'Read my latest articles' 
    },
    { 
      label: 'Contact', 
      route: '/contact', 
      icon: 'contact',
      description: 'Get in touch with me' 
    }
  ];

  ngOnInit(): void {
    this.initializeTheme();
    this.trackRouteChanges();
    this.updateScrollProgress();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialize theme based on system preference or stored preference
   */
  private initializeTheme(): void {
    // Check for stored theme preference or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      this.themeService.setDarkMode(true);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.themeService.setDarkMode(e.matches);
        }
      });
  }

  /**
   * Track route changes for analytics
   */
  private trackRouteChanges(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        this.analyticsService.trackPageView(event.urlAfterRedirects);
        this.closeMobileMenu(); // Close mobile menu on navigation
      });
  }

  /**
   * Toggle theme with animation and persistence
   */
  toggleTheme(): void {
    const newTheme = !this.themeService.isDarkModeActive();
    this.themeService.toggleTheme();
    
    // Store preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Track analytics
    this.analyticsService.trackEvent('theme_toggle', {
      event_category: 'ui_interaction',
      event_label: newTheme ? 'dark_mode' : 'light_mode'
    });

    // Add a subtle animation effect
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  }

  /**
   * Toggle mobile menu with animation
   */
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    this.analyticsService.trackEvent('mobile_menu_toggle', {
      event_category: 'ui_interaction',
      event_label: this.isMobileMenuOpen ? 'opened' : 'closed'
    });
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  /**
   * Handle scroll events for header effects and progress bar
   */
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollProgress();
    this.updateScrollState();
  }

  /**
   * Update scroll progress for the progress bar
   */
  private updateScrollProgress(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }


  private updateScrollState(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }

  /**
   * Handle click outside mobile menu to close it
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const mobileMenuButton = document.querySelector('[aria-label="Toggle navigation menu"]');
    const mobileMenu = document.querySelector('.md\\:hidden .space-y-1');
    
    if (this.isMobileMenuOpen && 
        !mobileMenuButton?.contains(target) && 
        !mobileMenu?.contains(target)) {
      this.closeMobileMenu();
    }
  }

  /**
   * Handle keyboard navigation
   */
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  /**
   * Track navigation clicks
   */
  trackNavigation(item: NavigationItem): void {
    this.analyticsService.trackEvent('navigation_click', {
      event_category: 'navigation',
      event_label: item.label.toLowerCase(),
      page_location: item.route
    });
  }

  /**
   * Get current route for highlighting active links
   */
  isRouteActive(route: string): boolean {
    if (route === '/') {
      return this.router.url === '/';
    }
    return this.router.url.startsWith(route);
  }
}
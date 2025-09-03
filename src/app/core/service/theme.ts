import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  darkMode: boolean;
  animations: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private readonly THEME_KEY = 'beauterofolio-theme';
  private readonly CSS_VARS_KEY = 'theme-css-vars';
  
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$ = this.darkModeSubject.asObservable();

  private themeConfig: ThemeConfig = {
    primaryColor: '#3B82F6',    // Blue-500
    secondaryColor: '#1E40AF',  // Blue-700
    accentColor: '#10B981',     // Emerald-500
    backgroundColor: '#F8FAFC', // Slate-50
    darkMode: false,
    animations: true
  };

  constructor() {
    this.initializeTheme();
    this.setupCSSVariables();
  }

  /**
   * Initialize theme on service creation
   */
  private initializeTheme(): void {
    // Check for stored theme preference
    const stored = this.getStoredTheme();
    const systemPrefersDark = this.getSystemThemePreference();
    
    // Determine initial theme
    let shouldUseDark = false;
    if (stored !== null) {
      shouldUseDark = stored;
    } else if (systemPrefersDark !== null) {
      shouldUseDark = systemPrefersDark;
    }

    this.setDarkMode(shouldUseDark, false); // Don't store system preference automatically
    
    // Listen for system theme changes
    this.watchSystemThemeChanges();
  }

  /**
   * Set up CSS custom properties for theming
   */
  private setupCSSVariables(): void {
    const root = document.documentElement;
    
    // Light theme variables
    root.style.setProperty('--color-primary', this.themeConfig.primaryColor);
    root.style.setProperty('--color-secondary', this.themeConfig.secondaryColor);
    root.style.setProperty('--color-accent', this.themeConfig.accentColor);
    root.style.setProperty('--color-background', this.themeConfig.backgroundColor);
    
    // Dark theme variables
    root.style.setProperty('--color-primary-dark', '#60A5FA'); // Blue-400
    root.style.setProperty('--color-secondary-dark', '#3B82F6'); // Blue-500
    root.style.setProperty('--color-accent-dark', '#34D399'); // Emerald-400
    root.style.setProperty('--color-background-dark', '#0F172A'); // Slate-900
  }

  /**
   * Get stored theme preference
   */
  private getStoredTheme(): boolean | null {
    try {
      const stored = localStorage.getItem(this.THEME_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  /**
   * Get system theme preference
   */
  private getSystemThemePreference(): boolean | null {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return null;
  }

  /**
   * Watch for system theme changes
   */
  private watchSystemThemeChanges(): void {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      mediaQuery.addEventListener('change', (e) => {
        // Only apply system changes if user hasn't set a preference
        if (this.getStoredTheme() === null) {
          this.setDarkMode(e.matches, false);
        }
      });
    }
  }

  /**
   * Toggle between dark and light mode
   */
  toggleTheme(): void {
    const newMode = !this.isDarkModeActive();
    this.setDarkMode(newMode, true);
  }

  /**
   * Set dark mode state
   */
  setDarkMode(isDark: boolean, persist: boolean = true): void {
    this.themeConfig.darkMode = isDark;
    this.darkModeSubject.next(isDark);

    // Update DOM
    this.applyThemeToDOM(isDark);
    
    // Persist preference if requested
    if (persist) {
      this.persistTheme(isDark);
    }
  }

  /**
   * Apply theme changes to DOM
   */
  private applyThemeToDOM(isDark: boolean): void {
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    // Trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { isDark, config: this.themeConfig }
    }));
  }

  /**
   * Persist theme preference to localStorage
   */
  private persistTheme(isDark: boolean): void {
    try {
      localStorage.setItem(this.THEME_KEY, JSON.stringify(isDark));
    } catch (error) {
      console.warn('Unable to save theme preference:', error);
    }
  }

  /**
   * Check if dark mode is currently active
   */
  isDarkModeActive(): boolean {
    return this.themeConfig.darkMode;
  }

  /**
   * Get current theme configuration
   */
  getThemeConfig(): ThemeConfig {
    return { ...this.themeConfig };
  }

  /**
   * Update theme configuration
   */
  updateThemeConfig(updates: Partial<ThemeConfig>): void {
    this.themeConfig = { ...this.themeConfig, ...updates };
    this.setupCSSVariables();
    this.applyThemeToDOM(this.themeConfig.darkMode);
  }

  /**
   * Reset theme to defaults
   */
  resetTheme(): void {
    localStorage.removeItem(this.THEME_KEY);
    this.themeConfig = {
      primaryColor: '#3B82F6',
      secondaryColor: '#1E40AF',
      accentColor: '#10B981',
      backgroundColor: '#F8FAFC',
      darkMode: false,
      animations: true
    };
    this.setupCSSVariables();
    this.setDarkMode(this.getSystemThemePreference() || false, false);
  }

  /**
   * Get theme as CSS classes for dynamic styling
   */
  getThemeClasses(): string[] {
    const classes = [];
    if (this.isDarkModeActive()) {
      classes.push('dark');
    }
    if (this.themeConfig.animations) {
      classes.push('animations-enabled');
    }
    return classes;
  }

  /**
   * Check if animations are enabled
   */
  areAnimationsEnabled(): boolean {
    return this.themeConfig.animations;
  }

  /**
   * Toggle animations
   */
  toggleAnimations(): void {
    this.themeConfig.animations = !this.themeConfig.animations;
    document.documentElement.classList.toggle('animations-disabled', !this.themeConfig.animations);
  }
}

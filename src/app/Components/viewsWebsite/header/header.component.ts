import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  activeSection = 'inicio';
  private observer?: IntersectionObserver;
  private routerSubscription?: Subscription;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.observeSections();
    window.setTimeout(() => this.observeSections());
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.observeSections());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routerSubscription?.unsubscribe();
  }

  scrollToSection(sectionId: string): void {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    this.router.navigate(['/'], { fragment: sectionId });
  }

  @HostListener('window:scroll')
  updateActiveSection(): void {
    if (window.scrollY < 180) {
      this.activeSection = 'inicio';
    }
  }

  private observeSections(): void {
    this.observer?.disconnect();
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleSection) {
          this.activeSection = (visibleSection.target as HTMLElement).id;
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => this.observer?.observe(section));
  }
}

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top-button.component.html',
  styleUrl: './scroll-to-top-button.component.scss',
})
export class ScrollToTopButtonComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}
  windowScrolled = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.listen('window', 'scroll', () => {
        this.windowScrolled = window.scrollY !== 0;
      });
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
}

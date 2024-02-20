import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppModule, demoTitleMap } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.path = event.url;
      }
    });
  }

  demoTitleMap = demoTitleMap;
  path = '/';
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Notifications } from '@mobiscroll/angular';
import { demoTitleMap } from './demos';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  providers: [Notifications],
  templateUrl: './app.component.html',
  standalone: true,
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
  title = 'mobiscroll-demos-angular';
}

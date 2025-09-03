import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Notifications } from '@mobiscroll/angular';
import { AppModule, demoTitleMap } from './app.module';

@Component({
  selector: 'app-root',
  imports: [AppModule, CommonModule, RouterLink, RouterOutlet],
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
}

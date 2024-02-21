import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

(window as Window & { isMbscDemo?: boolean }).isMbscDemo = true;

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

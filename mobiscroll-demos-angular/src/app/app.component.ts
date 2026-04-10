import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  localeAr,
  localeBg,
  localeCa,
  localeCs,
  localeDa,
  localeDe,
  localeEl,
  localeEn,
  localeEnGB,
  localeEs,
  localeFa,
  localeFi,
  localeFr,
  localeHe,
  localeHi,
  localeHr,
  localeHu,
  localeIt,
  localeJa,
  localeKo,
  localeLt,
  localeNl,
  localeNo,
  localePl,
  localePtBR,
  localePtPT,
  localeRo,
  localeRu,
  localeRuUA,
  localeSk,
  localeSr,
  localeSv,
  localeTh,
  localeTr,
  localeUa,
  localeVi,
  localeZh,
  MbscLocale,
  MbscModule,
  Notifications,
  setOptions,
} from '@mobiscroll/angular';
import { demoTitleMap } from './demos';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, MbscModule, RouterLink, RouterOutlet],
  providers: [Notifications],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appFooter') appFooterRef!: ElementRef;
  @ViewChild('appPath') appPathRef!: ElementRef;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.path = event.url;
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.updatePath());
      }
    });
  }

  demoTitleMap = demoTitleMap;
  path = '/';
  title = 'mobiscroll-demos-angular';

  theme = 'auto';
  themeVariant: 'auto' | 'light' | 'dark' = 'auto';
  locale: MbscLocale = localeEn;

  themes = [
    { value: 'ios', text: 'iOS' },
    { value: 'material', text: 'Material' },
    { value: 'windows', text: 'Windows' },
    { value: 'auto', text: 'Auto' },
  ];

  locales = [
    { value: localeEn, text: 'English' },
    { value: localeAr, text: 'Arabic' },
    { value: localeBg, text: 'Bulgarian' },
    { value: localeCa, text: 'Català' },
    { value: localeCs, text: 'Cestina' },
    { value: localeZh, text: 'Chinese' },
    { value: localeHr, text: 'Croatian' },
    { value: localeDa, text: 'Dansk' },
    { value: localeDe, text: 'Deutsch' },
    { value: localeEnGB, text: 'English (UK)' },
    { value: localeEs, text: 'Español' },
    { value: localeFr, text: 'Français' },
    { value: localeEl, text: 'Greek' },
    { value: localeHi, text: 'Hindi' },
    { value: localeIt, text: 'Italiano' },
    { value: localeJa, text: 'Japanese' },
    { value: localeKo, text: 'Korean' },
    { value: localeLt, text: 'Lietuvių' },
    { value: localeHu, text: 'Magyar' },
    { value: localeNl, text: 'Nederlands' },
    { value: localeNo, text: 'Norsk' },
    { value: localePl, text: 'Polski' },
    { value: localePtPT, text: 'Português Europeu' },
    { value: localePtBR, text: 'Pt. Brasileiro' },
    { value: localeRo, text: 'Română' },
    { value: localeSr, text: 'Serbian' },
    { value: localeSk, text: 'Slovencina' },
    { value: localeFi, text: 'Suomi' },
    { value: localeSv, text: 'Svenska' },
    { value: localeTh, text: 'Thai' },
    { value: localeTr, text: 'Türkçe' },
    { value: localeUa, text: 'Ukrainian' },
    { value: localeVi, text: 'Vietnamese' },
    { value: localeRu, text: 'Русский' },
    { value: localeRuUA, text: 'Русский (UA)' },
    { value: localeHe, text: 'עברית' },
    { value: localeFa, text: 'فارسی' },
  ];

  ngAfterViewInit() {
    this.setGlobalOptions();
    this.updatePath();
  }

  @HostListener('window:resize')
  onResize() {
    this.updatePath();
  }

  updatePath() {
    const footer = this.appFooterRef?.nativeElement;
    const pathEl = this.appPathRef?.nativeElement;
    if (footer && pathEl) {
      pathEl.style.display = '';
      pathEl.style.display = footer.scrollWidth > footer.clientWidth ? 'none' : '';
    }
  }

  setGlobalOptions() {
    setOptions({
      theme: this.theme,
      themeVariant: this.themeVariant,
      locale: this.locale,
    });
  }
}

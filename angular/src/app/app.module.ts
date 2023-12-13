import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponent as WorkWeekHours } from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import { AppComponent as CompareResources } from '../demos/eventcalendar/timeline/compare-resources-fixed-at-top/compare-resources-fixed-at-top';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, WorkWeekHours, CompareResources],
  imports: [FormsModule, MbscModule, BrowserModule, AppRoutingModule, HttpClientJsonpModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

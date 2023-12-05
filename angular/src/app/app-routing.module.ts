import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent as WorkWeekHours } from '../demos/eventcalendar/scheduler/work-week-hours/work-week-hours';
import { AppComponent as CompareResources } from '../demos/eventcalendar/timeline/compare-resources/compare-resources';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'scheduler/work-week-hours', component: WorkWeekHours },
  { path: 'timeline/compare-resources', component: CompareResources },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

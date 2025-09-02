import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { demos, demoTitleMap } from './demos';

const routes: Routes = [{ path: '', component: HomeComponent }];

for (const main of demos) {
  for (const sub of main.items) {
    for (const group of sub.items) {
      for (const demo of group.items) {
        const path = `${main.unique}/${sub.unique}/${demo.unique}`;
        demoTitleMap['/' + path] = demo.name;
        routes.push({ path, component: demo.component });
      }
    }
  }
}

export { routes };

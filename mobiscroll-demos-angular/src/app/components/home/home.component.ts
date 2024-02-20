import { Component } from '@angular/core';
import { demos } from '../../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  demos = demos;
}

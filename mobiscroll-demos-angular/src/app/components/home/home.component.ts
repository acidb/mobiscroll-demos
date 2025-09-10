import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';
import { demos } from '../../demos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, MbscModule, RouterLink],
})
export class HomeComponent {
  demos = demos;
}

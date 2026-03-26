import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MbscModule } from '@mobiscroll/angular';

@NgModule({
  imports: [CommonModule, FormsModule, MbscModule, HttpClientJsonpModule, HttpClientModule, RouterLink],
})
export class AppModule {}

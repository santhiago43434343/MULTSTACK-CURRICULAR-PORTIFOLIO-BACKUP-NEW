import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {}

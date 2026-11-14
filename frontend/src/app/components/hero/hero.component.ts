import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class Hero {
  readonly stack = ['Angular', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind'];
}

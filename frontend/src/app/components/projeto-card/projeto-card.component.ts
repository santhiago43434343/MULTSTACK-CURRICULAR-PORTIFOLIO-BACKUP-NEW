import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto-card',
  imports: [],
  templateUrl: './projeto-card.component.html',
  styleUrl: './projeto-card.component.css',
})
export class ProjetoCard {
  // Tudo vem de fora (via <app-projeto-card ...>)
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() midia = ''; // caminho do clipe em loop (.mp4/.webm) ou gif
  @Input() tecnologias: string[] = [];
  @Input() linkDemo = '';
  @Input() linkRepo = '';
}

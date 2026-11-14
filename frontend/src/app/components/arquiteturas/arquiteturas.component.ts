import { Component } from '@angular/core';

@Component({
  selector: 'app-arquiteturas',
  imports: [],
  templateUrl: './arquiteturas.component.html',
  styleUrl: './arquiteturas.component.css',
})
export class Arquiteturas {
  readonly itens = [
    {
      icone: 'FS',
      titulo: 'Full-stack',
      descricao: 'Angular no front, FastAPI (Python) na API e PostgreSQL no banco.',
    },
    {
      icone: '🐳',
      titulo: 'Containers',
      descricao: 'Tudo sobe junto com Docker Compose: front, back e banco de dados.',
    },
    {
      icone: '🔀',
      titulo: 'nginx',
      descricao: 'Serve o front compilado e faz proxy reverso do /api pro backend.',
    },
  ];
}

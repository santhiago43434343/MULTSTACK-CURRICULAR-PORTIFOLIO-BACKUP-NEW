import { Component, OnInit, inject, signal } from '@angular/core';
import { ProjetoCard } from '../projeto-card/projeto-card.component';
import { PortfolioService, ProjetoDTO } from '../../services/portfolio.service';

@Component({
  selector: 'app-projetos',
  imports: [ProjetoCard],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css',
})
export class Projetos implements OnInit {
  private api = inject(PortfolioService);

  // projetos vêm da API (backend Python)
  readonly projetos = signal<ProjetoDTO[]>([]);

  ngOnInit(): void {
    this.api.getProjetos().subscribe((dados) => this.projetos.set(dados));
  }
}

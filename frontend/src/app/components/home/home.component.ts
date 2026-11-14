import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner } from '../banner/banner.component';
import { PortfolioService, BannerDTO } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  imports: [Banner, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home implements OnInit {
  private api = inject(PortfolioService);

  // banners vêm da API (backend Python)
  readonly banners = signal<BannerDTO[]>([]);
  // 🗺️ liga o TÍTULO do banner -> slug da rota dedicada.
  // Adicione 1 linha aqui pra cada página nova que criar.
  private rotas: Record<string, string> = {
    'Back-end & APIs': 'backend',
    'Front-end & Estilo': 'frontend',
    'Bancos de Dados': 'database',
    'DevOps & Ferramentas': 'devOps',
    'Editores & IDEs': 'editorsIDES',
    'Sistemas & Terminal': 'Systems-And-Terminal',
    'Do Início ao Intermediário #capgemini': 'From-Beginner-to-Intermediate',
    'IA Future ': 'IAFuture',
     'Certificados & Competências': 'certificates',
  };

  slugDe(titulo: string): string | null {
    return this.rotas[titulo] ?? null;
  }

  ngOnInit(): void {
    this.api.getBanners().subscribe((dados) => this.banners.set(dados));
  }
}

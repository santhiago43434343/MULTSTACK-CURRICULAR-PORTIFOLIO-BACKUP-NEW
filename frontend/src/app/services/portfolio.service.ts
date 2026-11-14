import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

// ---- Formato dos dados que a API devolve ----
export interface LinkDTO {
  label: string;
  url: string;
}

export interface BannerDTO {
  id: number;
  titulo: string;
  imagens: string[]; // cada item é imagem OU vídeo (.mp4/.webm)
  links: LinkDTO[];
}

export interface ProjetoDTO {
  id: number;
  titulo: string;
  descricao: string;
  midia: string;
  tecnologias: string[];
  linkDemo: string;
  linkRepo: string;
}

export interface ContatoIn {
  nome: string;
  email: string;
  mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private http = inject(HttpClient);

  // "/api" é relativo: em dev o proxy manda pro :8000; em produção o nginx resolve.
  private base = '/api';

  getBanners(): Observable<BannerDTO[]> {
    return this.http.get<BannerDTO[]>(`${this.base}/banners`);
  }

  // um banner só, pela rota de detalhes (GET /api/banners/{id})
  getBanner(id: number): Observable<BannerDTO> {
    return this.http.get<BannerDTO>(`${this.base}/banners/${id}`);
  }

  getProjetos(): Observable<ProjetoDTO[]> {
    return this.http.get<ProjetoDTO[]>(`${this.base}/projetos`);
  }

  enviarContato(dados: ContatoIn): Observable<unknown> {
    return this.http.post(`${this.base}/contato`, dados);
  }

}
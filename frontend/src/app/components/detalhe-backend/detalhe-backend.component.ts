   /*Back-end & APIs */

import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide { src: string; cap: string; }
interface Tech  { src: string; lbl: string; }

@Component({
  selector: 'app-detalhe-backend',
  imports: [RouterLink],
  templateUrl: './detalhe-backend.component.html',
})
export class DetalheBackend implements OnInit, OnDestroy {
  private B = 'imagens/detalhes/backend/';

  // imagens do carrossel (fortes primeiro)
  readonly imagens: Slide[] = [
    { src: this.B + 'code-200-para-successfully-api-fast-python.jpg',           cap: 'Code 200 — FastAPI respondendo com sucesso' },
    { src: this.B + 'resposta-de-fastapi-para-backend-frontend-200-ok.jpg',     cap: 'Resposta da FastAPI 200 OK (backend + frontend)' },
    { src: this.B + 'navegador-fastapi-timescaledb-redis-successfully.jpg',     cap: 'Navegador → FastAPI → TimescaleDB + Redis ✓' },
    { src: this.B + 'successfully-database-fast-api-timescale-db-e-tests.jpg',  cap: 'Database FastAPI + TimescaleDB — testes OK' },
    { src: this.B + 'json-api-via-8000.jpg',                                    cap: 'JSON da API via :8000' },
    { src: this.B + 'default-meteora-api-via-8000.jpg',                         cap: 'API Meteora rodando em :8000' },
    { src: this.B + 'execucao-de-rota-e-testes-de-api-via-browser.jpg',         cap: 'Execução de rota e testes de API no browser' },
    { src: this.B + 'teste-de-backend-openmeteo-em-json-via-browser.jpg',       cap: 'Backend OpenMeteo retornando JSON' },
    { src: this.B + 'testes-com-database-para-fast-api-com-python-em-port-8000-apos-ajustes-no-config-json.jpg', cap: 'Testes com banco na FastAPI (:8000)' },
    { src: this.B + 'adminer-database-meteora.jpg',                             cap: 'Adminer — banco do projeto Meteora' },
    { src: this.B + 'database-admin-project-meteora.jpg',                       cap: 'Admin do banco — projeto Meteora' },
    // ↓ essa é frontend (Angular) — pode remover a linha se quiser
    { src: this.B + 'install-angular-testes-via-4200-successfully.jpg',         cap: 'Angular rodando em :4200 (frontend)' },
  ];

  // badges da stack (logos já existentes)
  readonly stack: Tech[] = [
    { src: 'imagens/banners/backend/springboot.png',     lbl: 'Spring Boot' },
    { src: 'imagens/banners/backend/rails.png',          lbl: 'Rails' },
    { src: 'imagens/banners/backend/ruby.jpg',           lbl: 'Ruby' },
    { src: 'imagens/banners/backend/java.png',           lbl: 'Java' },
    { src: 'imagens/banners/backend/nodejs.webp',        lbl: 'Node.js' },
    { src: 'imagens/banners/backend/tomcat.jpg',         lbl: 'Tomcat' },
    { src: 'imagens/banners/backend/ci-cd-pipeline.png', lbl: 'CI/CD' },
  ];

  readonly links = [
    { label: 'API TripBus (Rails)', url: '#' },
    { label: 'Proway Computers',    url: '#' },
  ];

  // --- carrossel ---
  readonly atual = signal(0);
  intervalo = 3500;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      const n = this.imagens.length;
      if (n) this.atual.update(i => (i + 1) % n);
    }, this.intervalo);
  }
  ngOnDestroy(): void { clearInterval(this.timer); }

  proximo(): void { const n = this.imagens.length; if (n) this.atual.update(i => (i + 1) % n); }
  anterior(): void { const n = this.imagens.length; if (n) this.atual.update(i => (i - 1 + n) % n); }
  irPara(i: number): void { this.atual.set(i); }
}
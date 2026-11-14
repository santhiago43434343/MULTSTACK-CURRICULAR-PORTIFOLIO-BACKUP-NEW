import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PortfolioService, BannerDTO } from '../../services/portfolio.service';

@Component({
  selector: 'app-banner-detalhe',
  imports: [RouterLink],
  templateUrl: './banner-detalhe.component.html',
  // sem styleUrl: usa só Tailwind
})
export class BannerDetalhe implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private api = inject(PortfolioService);

  readonly banner = signal<BannerDTO | null>(null);
  readonly carregando = signal(true);

  // --- carrossel ---
  readonly atual = signal(0);         // slide visível agora
  intervalo = 3500;                   // tempo do auto-play (ms)
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    // reage à mudança do :id na URL (permite ir de um detalhe pro outro)
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.carregando.set(true);
      this.atual.set(0);              // volta pro 1º slide ao trocar de banner
      this.api.getBanner(id).subscribe({
        next: (b) => { this.banner.set(b); this.carregando.set(false); },
        error: () => { this.banner.set(null); this.carregando.set(false); },
      });
    });

    // auto-play: avança sozinho a cada "intervalo"
    this.timer = setInterval(() => {
      const imgs = this.banner()?.imagens ?? [];
      if (imgs.length === 0) return;
      this.atual.update((i) => (i + 1) % imgs.length);
    }, this.intervalo);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);        // limpa o timer ao sair da página
  }

  proximo(): void {
    const n = this.banner()?.imagens.length ?? 0;
    if (n) this.atual.update((i) => (i + 1) % n);
  }
  anterior(): void {
    const n = this.banner()?.imagens.length ?? 0;
    if (n) this.atual.update((i) => (i - 1 + n) % n);
  }
  irPara(i: number): void { this.atual.set(i); }

  // vídeo (.mp4/.webm) -> <video>; senão <img>
  ehVideo(src: string): boolean {
    return /\.(mp4|webm)$/i.test(src);
  }
}
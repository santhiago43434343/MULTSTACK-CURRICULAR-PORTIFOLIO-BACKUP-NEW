import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
// "Molde" de cada link do banner
export interface LinkProjeto {
  label: string;
  url: string;
}

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class Banner implements OnInit, OnDestroy {
  // Dados recebidos de fora (de quem usar o <app-banner>)
  @Input() slug: string | null = null; // rota dedicada deste banner (ou null)
  @Input() titulo = '';
  @Input() imagens: string[] = [];
  @Input() links: LinkProjeto[] = [];
  @Input() intervalo = 3000;

  // Índice da imagem visível agora
  readonly atual = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.imagens.length === 0) return;
      this.atual.update((i) => (i + 1) % this.imagens.length);
    }, this.intervalo);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  // Avança pra próxima imagem (volta à primeira no fim)
  proximo(): void {
    this.atual.update((i) => (i + 1) % this.imagens.length);
  }

  // Volta pra imagem anterior (vai pra última se estiver na primeira)
  anterior(): void {
    this.atual.update((i) => (i - 1 + this.imagens.length) % this.imagens.length);
  }

  // Pula direto pra um slide (usado pelos indicadores/dots)
  irPara(i: number): void {
    this.atual.set(i);
  }

  // Diz se o slide é vídeo (.mp4/.webm) -> renderiza <video>; se não, <img>
  ehVideo(src: string): boolean {
    return /\.(mp4|webm)$/i.test(src);
  }
}

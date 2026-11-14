import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide { src: string; cap: string; }

@Component({
  selector: 'app-detalhe-certificates',
  imports: [RouterLink],
  templateUrl: './detalhe-certificates.component.html',
})
export class DetalheCertificates implements OnInit, OnDestroy {
  private B = 'imagens/detalhes/certificates/';

  readonly imagens: Slide[] = [
    // --- certificados reais (capa) ---
    { src: this.B + 'diploma-bootcamp-santander-2024.png',                 cap: 'Diploma — Bootcamp Santander 2024' },
    { src: this.B + 'certificado-ifro-programacao-de-sistemas-2.png',      cap: 'IFRO — Programação de Sistemas' },
    { src: this.B + 'certificate-bradesco-programacao-em-c.png',           cap: 'Bradesco — Programação em C' },
    { src: this.B + 'certificate-unimes-003.jpg',                          cap: 'Unimes — Certificado' },
    { src: this.B + 'componente-curricular-certificate-unimes.png',        cap: 'Unimes — Componente Curricular' },
    { src: this.B + 'certificado-001-introducao-ao-net-core-framework.webp', cap: 'Introdução ao .NET Core Framework' },
    { src: this.B + 'portifolio-vencedor.jpg',                             cap: 'Portfólio vencedor' },
    // --- competências / jornada ---
    { src: this.B + 'programa-start-by-capgemini.jpg',                     cap: 'Programa Start — Capgemini' },
    { src: this.B + 'curriculo-atualized-in-platform-capgemini.jpg',      cap: 'Currículo na plataforma Capgemini' },
    { src: this.B + 'introducao-as-ides-configuracao-de-ambiente-net.webp', cap: 'IDEs e ambiente .NET' },
    { src: this.B + 'sintaxe-e-tipos-de-dados-em-c.webp',                 cap: 'Sintaxe e tipos de dados em C' },
    { src: this.B + 'operadores-aritmeticos-em-c.gif',                    cap: 'Operadores aritméticos em C' },
    { src: this.B + 'conhecendo-as-estruturas-de-repeticao.gif',         cap: 'Estruturas de repetição' },
    { src: this.B + 'componente-capgeminii-modules.jpg',                 cap: 'Módulos — Capgemini' },
    { src: this.B + 'notes-por-module-capgemini.jpg',                    cap: 'Anotações por módulo — Capgemini' },
  ];

  readonly instituicoes = ['Bootcamp Santander', 'IFRO', 'Unimes', 'Bradesco', 'DIO', 'Capgemini', 'Microsoft .NET'];

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

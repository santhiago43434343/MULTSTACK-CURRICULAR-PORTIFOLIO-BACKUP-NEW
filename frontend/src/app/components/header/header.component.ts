import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  // RouterLink = navegar ao clicar; RouterLinkActive = marcar o link da rota atual
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class Header {
  // Cada item tem o caminho da rota e o texto do botão.
  readonly navItems = [
    { path: '/home', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/arquiteturas', label: 'Arquiteturas' },
    { path: '/contato', label: 'Contato' },
    { path: '/creditos', label: 'Créditos' },
  ];

  // Controla o menu no celular (aberto/fechado)
  readonly menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update((v) => !v);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class Contato {
  private api = inject(PortfolioService);

  // campos do formulário
  nome = '';
  email = '';
  mensagem = '';

  readonly enviando = signal(false);
  readonly status = signal<'idle' | 'ok' | 'erro'>('idle');

  enviar(): void {
    if (this.enviando()) return;
    this.enviando.set(true);
    this.status.set('idle');

    this.api
      .enviarContato({ nome: this.nome, email: this.email, mensagem: this.mensagem })
      .subscribe({
        next: () => {
          this.status.set('ok');
          this.nome = '';
          this.email = '';
          this.mensagem = '';
          this.enviando.set(false);
        },
        error: () => {
          this.status.set('erro');
          this.enviando.set(false);
        },
      });
  }
}

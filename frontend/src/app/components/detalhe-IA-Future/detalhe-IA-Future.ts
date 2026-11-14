/* IA Future  */

// DEPOIS
/* IA Future */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Tech { src: string; lbl: string; }

@Component({
    selector: 'app-detalhe-ia-future',
    imports: [RouterLink],
    templateUrl: './detalhe-IA-Future.html',
})
export class DetalheIAFuture {
    readonly stack: Tech[] = [
        { src: 'imagens/banners/ia-future/claude.jpg', lbl: 'Claude' },
        { src: 'imagens/banners/ia-future/ia-future.png', lbl: 'IA Future' },
    ];
}
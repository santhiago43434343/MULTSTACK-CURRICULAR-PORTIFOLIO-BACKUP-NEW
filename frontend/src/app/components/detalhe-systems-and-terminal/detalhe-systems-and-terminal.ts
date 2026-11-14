/* Sistemas & Terminal */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Tech { src: string; lbl: string; }

@Component({
    selector: 'app-detalhe-systems',
    imports: [RouterLink],
    templateUrl: './detalhe-systems-and-terminal.html',
})
export class DetalheSystems {
    readonly stack: Tech[] = [
        { src: 'imagens/banners/sistemas/linux-wsl.webp', lbl: 'Linux / WSL' },
        { src: 'imagens/banners/sistemas/ubuntu.jpeg', lbl: 'Ubuntu' },
        { src: 'imagens/banners/sistemas/powershell.png', lbl: 'PowerShell' },
        { src: 'imagens/banners/sistemas/windows.png', lbl: 'Windows' },
    ];
}
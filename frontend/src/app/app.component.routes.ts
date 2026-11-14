import { Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { Hero } from './components/hero/hero.component';
import { Projetos } from './components/projetos/projetos.component';
import { Arquiteturas } from './components/arquiteturas/arquiteturas.component';
import { Contato } from './components/contato/contato.component';
import { Creditos } from './components/creditos/creditos.component';
import { DetalheSystems } from './components/detalhe-systems-and-terminal/detalhe-systems-and-terminal';
import { DetalheIAFuture } from './components/detalhe-IA-Future/detalhe-IA-Future';
import { BannerDetalhe } from './components/banner-detalhe/banner-detalhe.component';
import { DetalheBackend } from './components/detalhe-backend/detalhe-backend.component';
import { DetalheFrontend } from './components/detalhe-frontend-Estilo/detalhe-frontendEstilo.component';
import { DetalheCertificates } from './components/detalhe-certificates/detalhe-certificates.component';
import { Detalhedatabase } from './components/detalhe-database/detalhe-database.component';
// Cada objeto liga um caminho da URL a um componente.
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // rota vazia -> vai pra /home
  { path: 'home', component: Home },
  { path: 'sobre', component: Hero },
  { path: 'projetos', component: Projetos },
  { path: 'arquiteturas', component: Arquiteturas },
  { path: 'contato', component: Contato },
  { path: 'creditos', component: Creditos },
  { path: 'detalhes/:id', component: BannerDetalhe },
  { path: 'detalhe/backend', component: DetalheBackend },
  { path: 'detalhe/frontend', component: DetalheFrontend },
  { path: 'detalhe/database', component: Detalhedatabase },
  { path: 'detalhe/Systems-And-Terminal', component: DetalheSystems },
  { path: 'detalhe/IAFuture', component: DetalheIAFuture },
  { path: 'detalhe/certificates', component: DetalheCertificates },
  { path: '**', redirectTo: 'home' }, // qualquer caminho inválido -> /home

];

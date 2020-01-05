import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { GerenciarLicencaComponent } from './licenca/gerenciar-licenca/gerenciar-licenca.component';
import { CadastrarLicencaComponent } from './licenca/cadastrar-licenca/cadastrar-licenca.component';
import { CadastrarCondicionanteComponent } from './condicionantes/cadastrar-condicionante/cadastrar-condicionante.component';

const APP_ROUTES: Routes = [
    {path:'',component: MenuPrincipalComponent},
    {path:'licenca',component: GerenciarLicencaComponent},
    {path:'licenca/active',component: CadastrarLicencaComponent},
    {path:'condicionante',component: CadastrarCondicionanteComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
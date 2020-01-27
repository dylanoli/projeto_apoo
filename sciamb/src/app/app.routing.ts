import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { GerenciarLicencaComponent } from './licenca/gerenciar-licenca/gerenciar-licenca.component';
import { FormLicencaComponent } from './licenca/form-licenca/form-licenca.component';
import { FormCondicionanteComponent } from './condicionantes/form-condicionante/form-condicionante.component';

const APP_ROUTES: Routes = [
    {path:'',component: MenuPrincipalComponent},
    {path:'licenca',component: GerenciarLicencaComponent},
    {path:'licenca/form',component: FormLicencaComponent},
    {path:'licenca/form:id',component: FormLicencaComponent},
    {path:'condicionante',component: FormCondicionanteComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
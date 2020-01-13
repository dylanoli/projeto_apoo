import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SideMenuComponent } from './utils/side-menu/side-menu.component';
import { TopMenuComponent } from './utils/top-menu/top-menu.component'
import { FormCondicionanteComponent } from './condicionantes/form-condicionante/form-condicionante.component';
import { FormLicencaComponent } from './licenca/form-licenca/form-licenca.component';
import { GerenciarLicencaComponent } from './licenca/gerenciar-licenca/gerenciar-licenca.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { routing } from './app.routing';
import { NotificationSnackComponent } from './notification-snack/notification-snack.component';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    FormCondicionanteComponent,
    FormLicencaComponent,
    GerenciarLicencaComponent,
    MenuPrincipalComponent,
    NotificationSnackComponent
  ],
  entryComponents:[
    FormCondicionanteComponent,
    NotificationSnackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

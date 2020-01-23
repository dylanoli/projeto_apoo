import { Component } from '@angular/core';
import { FormLicencaComponent } from 'src/app/licenca/form-licenca/form-licenca.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Condicionante } from 'src/app/transference-objects/condicionante';
import { NotificationSnackComponent } from 'src/app/notification-snack/notification-snack.component';

export interface Tipo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-condicionante',
  templateUrl: './form-condicionante.component.html',
  styleUrls: ['./form-condicionante.component.css']
})
export class FormCondicionanteComponent {
  condicioante: Condicionante =  new Condicionante();
  anexoChecked = true;
  tipoCondicioante:Tipo[] = [
    {value: "Preventiva", viewValue: "Preventiva"},
    {value: "Mitigadora", viewValue: "Mitigadora"},
    {value: "Compensatória", viewValue: "Compensatória"}
  ];
  constructor(public dialogRef: MatDialogRef<FormLicencaComponent>,private _snackBar: MatSnackBar) {
    
  }
  openSnackBar() {
    this._snackBar.openFromComponent(NotificationSnackComponent, {
      duration: 2000
    });
  }
  onSubmit()
  {
    this.openSnackBar();
  }
  closeCondicionante()
  {
    this.dialogRef.close();
  }
}

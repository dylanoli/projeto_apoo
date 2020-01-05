import { Component, OnInit } from '@angular/core';
import { CadastrarLicencaComponent } from 'src/app/licenca/cadastrar-licenca/cadastrar-licenca.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface Tipo {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cadastrar-condicionante',
  templateUrl: './cadastrar-condicionante.component.html',
  styleUrls: ['./cadastrar-condicionante.component.css']
})
export class CadastrarCondicionanteComponent {
  tipoCondicioante:Tipo[] = [
    {value: "preventiva", viewValue: "Preventiva"},
    {value: "mitigadora", viewValue: "Mitigadora"},
    {value: "compensatoria", viewValue: "Compensatória"}
  ];
  anexoChecked = true;
  constructor(
    public dialogRef: MatDialogRef<CadastrarLicencaComponent>) {}
  closeCondicionante()
  {
    this.dialogRef.close();
  }
}

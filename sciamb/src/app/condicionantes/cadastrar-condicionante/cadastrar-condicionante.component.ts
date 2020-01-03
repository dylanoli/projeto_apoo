import { Component, OnInit } from '@angular/core';
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
  constructor()
  {
    
  }
}

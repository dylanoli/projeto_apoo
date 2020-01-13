import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormCondicionanteComponent } from 'src/app/condicionantes/form-condicionante/form-condicionante.component';
import {MatDialog} from '@angular/material/dialog';
import {Condicionante} from 'src/app/bean/condicionante';
export interface MenuFlow
{
  name:string;
}

const ELEMENT_DATA: Condicionante[] = [
  {id:1,nome: "Controle da bomba", tipo: "Preventiva", prazo:new Date(2020,11,11), descricao: "Manter a bomba em boas condições", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false},
  {id:2,nome: "Limpeza da água", tipo: "Preventiva", prazo:new Date(2022,11,11), descricao: "Manter a água limpa", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false}
];
@Component({
  selector: 'app-form-licenca',
  templateUrl: './form-licenca.component.html',
  styleUrls: ['./form-licenca.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class FormLicencaComponent {

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'id','nome','tipo','prazo',"opt"
  ];
  options: MenuFlow[] = [
    {name:"Visualizar"},{name:"Alterar"},{name:"Excluir"}
  ];
  
  constructor(public dialog: MatDialog) {}
  openCondicionante()
  {
    this.dialog.open(FormCondicionanteComponent);
  }
}

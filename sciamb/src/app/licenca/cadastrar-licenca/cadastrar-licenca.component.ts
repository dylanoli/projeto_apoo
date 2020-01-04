import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
export interface columnsShow
{
  name:string;
  view:string
}
export interface MenuFlow
{
  name:string;
}
export interface Condicionante
{
  id: Number;
  nome: string;
  tipo: string;
  prazo: Date;
  descricao: string;
  arquivo_obrigatorio: boolean;
  tipo_arquivo: string;
  desc_arquivo: string
  status: boolean;
};
const ELEMENT_DATA: Condicionante[] = [
  {id:1,nome: "Controle da bomba", tipo: "Preventiva", prazo:new Date(2020,11,11), descricao: "Manter a bomba em boas condições", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false},
  {id:2,nome: "Limpeza da água", tipo: "Preventiva", prazo:new Date(2022,11,11), descricao: "Manter a água limpa", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false}
];
@Component({
  selector: 'app-cadastrar-licenca',
  templateUrl: './cadastrar-licenca.component.html',
  styleUrls: ['./cadastrar-licenca.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class CadastrarLicencaComponent {
  dataSource = ELEMENT_DATA;
  // columnsToDisplay: columnsShow[] = [
  //   {name:'id',view:"Número"},
  //   {name:'nome',view:"Nome"},
  //   {name:'tipo',view:"Tipo"},
  //   {name:'prazo',view:"Prazo"}
  // ];
  displayedColumns: string[] = [
    'id','nome','tipo','prazo',"opt"
  ];
  options: MenuFlow[] = [
    {name:"Alterar"},{name:"Excluir"}
  ];
  
  expandedElement: Condicionante | null;
}

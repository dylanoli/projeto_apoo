import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
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

export interface Licenca
{
  id: Number;
  nome: string;
  validade: Date;
  condicioantes: Condicionante[];
};
const ELEMENT_DATA: Licenca[] = [
  {
    id:1,
    nome: "Utilizar recursos do rio", 
    validade: new Date(2023,11,11),
    condicioantes: [
      {id:1,nome: "Controle da bomba", tipo: "Preventiva", prazo:new Date(2020,11,11), descricao: "Manter a bomba em boas condições.", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false},
      {id:2,nome: "Limpeza da água", tipo: "Preventiva", prazo:new Date(2022,11,11), descricao: "Manter a água limpa.", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Comprovante de manutenção feita",status:false}    
    ]
  },
  {
    id:2,
    nome: "Ambiente Seguro", 
    validade: new Date(2021,5,10),
    condicioantes: [
      {id:1,nome: "Instalação elétrica", tipo: "Preventiva", prazo:new Date(2020,5,10), descricao: "Possuir um planejamento para instalçao elétrica segundo as normas.", arquivo_obrigatorio:true,tipo_arquivo:".pdf",desc_arquivo:"Mapa de instalação elétrica",status:false}
    ]
  },
];

@Component({
  selector: 'app-gerenciar-licenca',
  templateUrl: './gerenciar-licenca.component.html',
  styleUrls: ['./gerenciar-licenca.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class GerenciarLicencaComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'id','nome','validade',"opt"
  ];
  options: MenuFlow[] = [
    {name:"Visualizar"},{name:"Alterar"},{name:"Excluir"}
  ];
  
  expandedElement: Condicionante | null;
  constructor() { }

  ngOnInit() {
  }

}

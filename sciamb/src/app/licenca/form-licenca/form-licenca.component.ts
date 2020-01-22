import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormCondicionanteComponent } from 'src/app/condicionantes/form-condicionante/form-condicionante.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material';
import { Condicionante } from 'src/app/transference-objects/condicionante';
import { Licenca } from 'src/app/transference-objects/licenca';
import { AngularFireDatabase } from '@angular/fire/database';

export interface MenuFlow
{
  name:string;
}

let ELEMENT_DATA: Condicionante[] = [
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
  licenca: Licenca = new Licenca();
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'id','nome','tipo','prazo',"opt"
  ];
  @ViewChild(MatTable,{static:false}) table: MatTable<any>;
  
  constructor(public dialog: MatDialog, private _db: AngularFireDatabase) {}
  openCondicionante()
  {
    const dialogRef = this.dialog.open(FormCondicionanteComponent);
    dialogRef.afterClosed().subscribe(result =>
    {
      if(result)
      {
        this.dataSource.push(result);
        console.log(this.dataSource);
        this.table.renderRows();
      }
    })
  }
  adicionarLicenca(licenca: Licenca)
  {
    licenca.condicioantes = this.dataSource;
    console.log(licenca);
    this._db.list('licenca').push(licenca).then((result :any) => {
      console.log(result.key);
    });
  }
  removeCondicionante(cond:Condicionante)
  {
    let mapCond:number = this.dataSource.map(x => {
      return x.id;
    }).indexOf(cond.id);
    console.log(mapCond);
    this.dataSource.splice(mapCond,1);
    this.table.renderRows();
  }
}

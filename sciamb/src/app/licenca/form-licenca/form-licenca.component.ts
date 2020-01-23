import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormCondicionanteComponent } from 'src/app/condicionantes/form-condicionante/form-condicionante.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material';
import { Condicionante } from 'src/app/transference-objects/condicionante';
import { Licenca } from 'src/app/transference-objects/licenca';
import { AngularFireDatabase } from '@angular/fire/database';
import {Location} from '@angular/common';
import { LicencaDBService } from 'src/app/database/licenca-db.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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

  state$: Observable<Licenca>;

  licenca: Licenca = new Licenca();
  condicionantes: Condicionante[] = [];

  displayedColumns: string[] = [
    'id','nome','tipo','prazo',"opt"
  ];
  @ViewChild(MatTable,{static:false}) table: MatTable<any>;
  
  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute,  private _licencaService: LicencaDBService, private _location: Location) {}
  ngOnInit() {
    this.licenca.condicioantes = this.condicionantes;
    
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));
  }
  openCondicionante()
  {
    const dialogRef = this.dialog.open(FormCondicionanteComponent);
    dialogRef.afterClosed().subscribe( (result:Condicionante) =>
    {
      console.log(this.licenca);
      console.log(result);
      if(result)
      {
        this.licenca.condicioantes.push(result);
        this.table.renderRows();
      }
    })
  }
  adicionarLicenca(licenca: Licenca)
  {
    this._licencaService.insert(licenca);
    this._location.back();
  }
  removeCondicionante(cond:Condicionante)
  {
    let mapCond:number = this.licenca.condicioantes.map(x => {
      return x.id;
    }).indexOf(cond.id);
    console.log(mapCond);
    this.licenca.condicioantes.splice(mapCond,1);
    this.table.renderRows();
  }
}

import { Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Licenca} from 'src/app/transference-objects/licenca';
import { LicencaService } from 'src/app/services/licenca.service';
import { Observable } from 'rxjs';

export interface MenuFlow
{
  name:string;
}

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
  licencas: Observable<any>;
  displayedColumns: string[] = [
    'id','nome','validade',"opt"
  ];
  options: MenuFlow[] = [
    {name:"Visualizar"},{name:"Alterar"},{name:"Excluir"}
  ];
  constructor(private _licencaService: LicencaService) { }

  ngOnInit() {
    this.licencas = this.listarLicencas();
    console.log(this.licencas);
  }

  listarLicencas()
  {
    return this._licencaService.selectAll();
  }

}

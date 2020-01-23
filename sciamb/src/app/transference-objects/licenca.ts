import {Condicionante} from 'src/app/transference-objects/condicionante';
export class Licenca
{
  id: Number;
  nome: string;
  validade: Date;
  condicioantes: Condicionante[];
};
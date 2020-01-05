import {Condicionante} from 'src/app/bean/condicionante';
export interface Licenca
{
  id: Number;
  nome: string;
  validade: Date;
  condicioantes: Condicionante[];
};
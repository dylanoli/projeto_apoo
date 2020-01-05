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
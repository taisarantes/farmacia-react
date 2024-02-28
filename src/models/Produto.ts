import Categoria from './Categoria';


export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: 0,
  laboratorio: string,
  preco: 0,
  foto: string,
  categoria: Categoria | null;
}

import { useEffect, useState } from 'react';
import Produto from '../../../models/Produto';
import CardProdutos from '../cardProdutos/CardProdutos';
import { buscar } from '../../../services/Service';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
      await buscar('/produtos', setProdutos, {
      });
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
 
  return (
    <>
  
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
       
      {produtos.map((produto) => (
          <CardProdutos key={produto.id} prod={produto} />
        ))}
        
      </div>
    </>
  );
}

export default ListaProdutos;
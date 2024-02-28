import { Link, useNavigate } from 'react-router-dom'


function NavBar() {


  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacia Kars</div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <div className='hover:underline'>Cadastrar Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default NavBar
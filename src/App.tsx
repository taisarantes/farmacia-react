import Home from './paginas/home/Home';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;
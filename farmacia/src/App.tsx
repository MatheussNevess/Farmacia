import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ListarCategorias from './components/categoria/listarCategorias/ListarCategoria';
import FormCategoria from './components/categoria/formCategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';

function App() {
  
  return (
    
      
      
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastroCategoria" element={<FormCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      
  );
}

export default App;
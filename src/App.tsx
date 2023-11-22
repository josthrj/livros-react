import React from 'react';
import LivroLista from './livroLista.js';
import LivroDados from './livroDados.js'; // Asegúrate de que la ruta sea correcta según tu estructura de carpetas
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Outlet } from 'react-router-dom';

function App() {
 return (
    <div className="container">
      <div className="row">
      <div className="col-md-12 ">
          <h1 className="text-center">Catálogo de Livros</h1>
          <LivroLista />
        </div>
      </div>
    </div>
 );
}

export default App;
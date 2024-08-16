import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardCategoria from '../cardCategoria/CardCategoria';
import Categoria from '../../../models/categoria';

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get('https://farmacia.com/categorias')
      .then(response => {
        setCategorias(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar categorias:', error);
      });
  }, []);

  return (
    <div>
      {categorias.map((categoria) => (
        <CardCategoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default ListarCategorias;

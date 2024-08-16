import React from 'react';
import axios from 'axios';

interface Props {
  categoriaId: number;
  onDelete: () => void;
}

const DeletarCategoria: React.FC<Props> = ({ categoriaId, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`https://farmacia.com/deletarCategoria/${categoriaId}`)
      .then(onDelete)
      .catch(error => console.error('Erro ao deletar categoria:', error));
  };

  return (
    <button onClick={handleDelete}>
      Deletar Categoria
    </button>
  );
}

export default DeletarCategoria;

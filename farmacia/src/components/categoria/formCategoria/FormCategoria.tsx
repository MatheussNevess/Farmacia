import React, { useState } from 'react';
import axios from 'axios';
import Categoria from '../../../models/categoria';

interface Props {
  categoriaAtual?: Categoria;
  onSave: () => void;
}

const FormCategoria: React.FC<Props> = ({ categoriaAtual, onSave }) => {
  const [tipo, setTipo] = useState<string>(categoriaAtual ? categoriaAtual.tipo : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const categoria = { id: categoriaAtual?.id, tipo };

    if (categoriaAtual) {
      axios.put(`https://farmacia.com/editarCategoria/${categoriaAtual.id}`, categoria)
        .then(onSave)
        .catch(error => console.error('Erro ao atualizar categoria:', error));
    } else {
      axios.post('https://farmacia.com/cadastroCategoria', categoria)
        .then(onSave)
        .catch(error => console.error('Erro ao criar categoria:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        placeholder="Tipo de Categoria"
        required
      />
      <button type="submit">{categoriaAtual ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
}

export default FormCategoria;

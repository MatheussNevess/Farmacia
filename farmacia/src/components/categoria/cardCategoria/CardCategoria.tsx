import React from 'react';
import Categoria from '../../../models/categoria';

interface Props {
  categoria: Categoria;
}

const CardCategoria: React.FC<Props> = ({ categoria }) => {
  return (
    <div>
      <h3>{categoria.tipo}</h3>
    </div>
  );
}

export default CardCategoria;

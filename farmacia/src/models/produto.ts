import Categoria from "./categoria";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    marca: string;
    preco: number;
    categoria: Categoria | null;
}
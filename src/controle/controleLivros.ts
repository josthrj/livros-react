// En ControleLivros.ts
import { Livro } from '../modelo/Livro';
 // Ajusta la ruta según la ubicación del archivo Livro.ts

const livros: Array<Livro> = [
    new Livro(1, 1, 'Título 1', 'Resumo 1', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Título 2', 'Resumo 2', ['Autor 3', 'Autor 4']),
    new Livro(3, 3, 'Título 3', 'Resumo 3', ['Autor 5', 'Autor 6'])
    // Agrega más libros si es necesario
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(livro: Livro): void {
        const maiorCodigo = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0);
        livro.codigo = maiorCodigo + 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export { ControleLivro };

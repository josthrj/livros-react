import React, { useState, useEffect } from 'react';
import { ControleLivro } from '../src/controle/controleLivros';
import { ControleEditora } from '../src/controle/controleEditoras';

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr>
      <td>
        <button onClick={handleExcluir}>Excluir</button>
      </td>
      <td>{livro.codigo}</td>
      <td>{livro.codEditora}</td>
      <td>{nomeEditora}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const controleLivro = new ControleLivro();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const carregarLivros = async () => {
      const livrosCarregados = await controleLivro.obterLivros();
      setLivros(livrosCarregados);
      setCarregado(true);
    };

    if (!carregado) {
      carregarLivros();
    }
  }, [carregado, controleLivro]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Excluir</th>
            <th>Código</th>
            <th>Código da Editora</th>
            <th>Nome da Editora</th>
            <th>Título</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;

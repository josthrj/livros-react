import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from '../controles/ControleLivro';
import ControleEditora from '../controles/ControleEditora';

function LivroDados() {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const [opcoes, setOpcoes] = useState([]);

    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    useState(() => {
        setOpcoes(controleEditora.getEditoras().map(editora => ({
            value: editora.codEditora,
            text: editora.nome
        })));
    }, []);

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const livro = {
            codLivro: 0,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora
        };

        controleLivro.incluir(livro);

        navigate('/');
    };

    const navigate = useNavigate();

    return (
        <main>
            <h2>Cadastro de Livro</h2>
            <form onSubmit={incluir}>
                <label>
                    Título:
                    <input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
                </label>
                <label>
                    Resumo:
                    <textarea value={resumo} onChange={(event) => setResumo(event.target.value)} />
                </label>
                <label>
                    Autores:
                    <textarea value={autores} onChange={(event) => setAutores(event.target.value)} />
                </label>
                <label>
                    Editora:
                    <select value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Incluir</button>
            </form>
        </main>
    );
}

export default LivroDados;
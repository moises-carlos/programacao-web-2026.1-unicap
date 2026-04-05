"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
    const [rodada, setRodada] = useState(1);
    const [jogadorAtual, setJogadorAtual] = useState(1);

    const [dadosJ1, setDadosJ1] = useState([null, null]);
    const [dadosJ2, setDadosJ2] = useState([null, null]);

    const [resultado, setResultado] = useState("");
    const [placar, setPlacar] = useState({ j1: 0, j2: 0 });

    function rolarDados() {
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;

        if (jogadorAtual === 1) {
            setDadosJ1([d1, d2]);
            setJogadorAtual(2);
        } else {
            setDadosJ2([d1, d2]);
            calcularResultado([d1, d2]);
        }
    }

    function calcularResultado(dadosJogador2) {
        const soma1 = dadosJ1[0] + dadosJ1[1];
        const soma2 = dadosJogador2[0] + dadosJogador2[1];

        if (soma1 > soma2) {
            setResultado("Jogador 1 ganhou a rodada");
            setPlacar(prev => ({ ...prev, j1: prev.j1 + 1 }));
        } else if (soma2 > soma1) {
            setResultado("Jogador 2 ganhou a rodada");
            setPlacar(prev => ({ ...prev, j2: prev.j2 + 1 }));
        } else {
            setResultado("Empate na rodada");
        }

        if (rodada < 5) {
            setTimeout(() => {
                setRodada(prev => prev + 1);
                setJogadorAtual(1);
            }, 1000);
        } else {
            setRodada(6); // finaliza
        }
    }

    function reiniciar() {
        setRodada(1);
        setJogadorAtual(1);
        setDadosJ1([null, null]);
        setDadosJ2([null, null]);
        setResultado("");
        setPlacar({ j1: 0, j2: 0 });
    }

    const jogoFinalizado = rodada > 5;

    return (
        <div className="container">
            <h1>🎲 Jogo de Dados</h1>

            <h2>Rodada: {rodada <= 5 ? rodada : 5}/5</h2>

            <div className="jogador">
                <h3>Jogador 1</h3>
                <div className="dados">
                    <Dado valor={dadosJ1[0]} />
                    <Dado valor={dadosJ1[1]} />
                </div>
            </div>

            <div className="jogador">
                <h3>Jogador 2</h3>
                <div className="dados">
                    <Dado valor={dadosJ2[0]} />
                    <Dado valor={dadosJ2[1]} />
                </div>
            </div>

            <h2>{resultado}</h2>

            {!jogoFinalizado && (
                <button onClick={rolarDados}>
                    Jogar (Jogador {jogadorAtual})
                </button>
            )}

            {jogoFinalizado && (
                <div>
                    <h2>🏆 Resultado Final</h2>

                    {placar.j1 > placar.j2 && <p>Jogador 1 venceu!</p>}
                    {placar.j2 > placar.j1 && <p>Jogador 2 venceu!</p>}
                    {placar.j1 === placar.j2 && <p>Empate geral!</p>}

                    <button onClick={reiniciar}>
                        Jogar Novamente
                    </button>
                </div>
            )}
        </div>
    );
}
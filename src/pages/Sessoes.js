import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../components/Footer";
import BotaoSessao from "../components/BotaoSessao";

function Data({diasemana, diac, sessoesdia}) {
    return(
        <PaginaContent data-test="movie-day">
            <div>{diasemana + " - " + diac}</div>
            <Sessao>
                {sessoesdia.map((n) => <BotaoSessao key={n.id} sessionID={n.id} time={n.name}/>)}
            </Sessao>
        </PaginaContent>
    )
}

export default function Sessoes() {
    const { idFilme: filmeID } = useParams();
    const [imagem, setImagem] = useState("");
    const [dias, setDias] = useState([]);
    const [nomeFilme, setNomefilme] = useState("");
    const [ idImagem, setIdImagem] = useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeID}/showtimes`);
        
        promise.then(response => {
            setImagem(response.data.posterURL);
            setNomefilme(response.data.title);
            setDias(response.data.days);
        });
        
    }, [filmeID]);

    return (
        <ContentSessoes>
            <Topo>Selecione o horário</Topo>
            {dias.map((m) => <Data key={m.id} diasemana={m.weekday} diac={m.date} sessoesdia={m.showtimes} />)}
            <Footer imagemFilme={imagem} tituloFilme={nomeFilme} />
        </ContentSessoes>
    )
}

const ContentSessoes = styled.div`
    margin-bottom: 140px;
    font-family: 'Roboto';
`

const Topo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    height: 110px;
`

const PaginaContent = styled.div`
    padding-left: 24px;
    font-size: 20px;
    font-family: 'Roboto';

    div {
        margin-bottom: 30px;
    }
`;

const Sessao = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto';
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        margin-right: 8px;
        font-family: 'Roboto';
        width: 83px;
        height: 43px;
        font-size: 18px;
        color: white;
        background-color: #E8833A;
    }
    a {
        color: inherit;
        text-decoration: inherit;
        font-family: 'Roboto';
    }
`
const Teste = styled.div`
        width: 83px;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 3px;
        margin-right: 8px;
        font-family: 'Roboto';
        background-color: #E8833A;
        font-size: 18px;

`
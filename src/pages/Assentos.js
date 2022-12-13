import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Assentos from "../components/Assento";
import Opcoes from "../components/Opcoes"


export default function AssentosG({ infoFilme }) {
    const { idSessao: id } = useParams();
    const [aSelecionado, setASelecionado] = useState([]);
    const [idAssento, setIdAssento] = useState([]);
    const [assentosLivre, setAssentosLivre] = useState([]);
    const [dadosSessao, setDadosSessao] = useState({});
    // const [ idImagem, setIdImagem] = useState("")
    // const [assentos, setAssentos] = useState([]);
    const [numeroAssento, setNumeroAssento] = useState([]);
    const [lugar, setLugar] = useState([]);
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);

        promise
            .then(response => {
                setAssentosLivre(response.data.seats);
                setDadosSessao({
                    weekday: response.data.day.weekday,
                    time: response.data.name,
                    filmeURL: response.data.movie.posterURL,
                    tituloFilme: response.data.movie.title
                //     infoFilme.time = response.data.name;
                // infoFilme.date = response.data.day.date;
                // infoFilme.movie = response.data.movie.title;
                })
                infoFilme.time = response.data.name;
                infoFilme.date = response.data.day.date;
                infoFilme.movie = response.data.movie.title;
            });
    }, [id])

    const [name, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function validarCpf(m) {
        const value = m.target.value;
        const lastCharIndex = value.length - 1;

        if (value.length === 11) {
            setCpf(value + '-');
            return;
        }
        if (isNaN(value[lastCharIndex])) {
            setCpf(value.substring(0, lastCharIndex));
            return;
        }
        if (value.length === 3 || value.length === 7) {
            setCpf(value + '.');
            return;
        }
        setCpf(value);
    }

    function enviarInfo(e) {
        e.preventDefault();
        if (aSelecionado.length > 0) {
            const obj = {
                ids: idAssento,
                name,
                cpf: cpf.replaceAll('.', '').replaceAll('-', '')
            }

            infoFilme.seats = aSelecionado;
            infoFilme.nomeCliente = name;
            infoFilme.cpfCliente = cpf;

            const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj);
            promise.then(() => navigate("/sucesso"));
        } else {
            alert("Selecione um assento.");
        }
    }

    return (
        <Container>
            <Topo>Selecione o(s) assento(s)</Topo>
            <div>
                <ContAssentos>
                    {assentosLivre.map((m) => (
                        <Assentos
                            key={m.id}
                            assentoId={m.id}
                            assentoNum={m.name}
                            disponivel={m.isAvailable}
                            assentoSelecionado={aSelecionado}
                            setAssentoSelecionado={setASelecionado}
                            assentoSelecionadoId={idAssento}
                            setAssentoSelecionadoId={setIdAssento}
                        />
                    ))}
                </ContAssentos>
                <Opcoes />
                <Form onSubmit={enviarInfo}>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input
                        data-test="client-name"
                        id="name"
                        name="nomeCliente"
                        type="text"
                        placeholder="Digite o seu nome..."
                        value={name}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input
                        data-test="client-cpf"
                        id="cpf"
                        name="cpfCliente"
                        type="text"
                        maxLength="14"
                        minLength="14"
                        placeholder="Digite seu CPF..."
                        value={cpf}
                        onChange={validarCpf}
                        required
                    />
                    <Button type="submit" data-test="book-seat-btn">Reservar assento(s)</Button>
                </Form>
            </div>
            <Footer
                imagemFilme={dadosSessao.filmeURL}
                tituloFilme={dadosSessao.tituloFilme}
                diaSemana={dadosSessao.weekday}
                hora={dadosSessao.time}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 140px;
    font-family: 'Roboto';
`

const Topo = styled.div`
    font-size: 24px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContAssentos = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 7px;
    grid-auto-rows: 1fr;
    row-gap: 18px;
`


const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    label {
        font-size: 18px;
        color: #293845;
        margin-top: 10px;
    }

    input {
        width: 100%;
        font-size: 18px;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        box-sizing: border-box;
        color: #293845;
        padding: 18px;
    }

    input::placeholder {
        font-style: italic;
        color: #AFAFAF;
        opacity: 1;
    }
`

const Button = styled.button`
    width: 226px;
    height: 43px;
    display: flex;
    margin: 55px auto 0;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    font-size: 18px;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`
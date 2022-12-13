import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Successo({ infoFilme }) {
    return (
        <InfoCompra>
            <Sucesso>Pedido feito<br />com sucesso!</Sucesso>
            <Containers data-test="movie-info">
                <p>Filme e sessão</p>
                <Info>{infoFilme.movie}</Info>
                <Info><span>{infoFilme.date + ' '}</span><span>{infoFilme.time}</span></Info>
            </Containers>

            <Containers data-test="seats-info">
                <p>Ingressos</p>
                {infoFilme.seats.map((seat, index) => <Info key={index}>{"Assento " + seat}</Info>)}
            </Containers>

            <Containers data-test="client-info">
                <p>Comprador</p>
                <Info>{"Nome: " + infoFilme.nomeCliente}</Info>
                <Info>{"CPF: " + infoFilme.cpfCliente}</Info>
            </Containers>
            <Link to="/">
                <Botao data-test="go-home-btn">Voltar pra Home</Botao>
            </Link>
        </InfoCompra>
    )
}

const InfoCompra = styled.div`
font-family: 'Roboto';
    a {
        text-decoration: none;
        color: inherit;
    }
`

const Containers = styled.div`
    font-size: 22px;
    color: #293845;
    margin: 35px;

    p{
        font-size: 24px;
        margin-bottom: 13px;
        font-weight: 700;
        color: #293845;
    }
`

const Info = styled.div`
    margin-bottom: 9px;
`

const Sucesso = styled.div`
    text-align: center;
    margin: 24px;
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    
`

const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 3px;
    margin-right: 9px;
    margin: 62px auto;
    background-color: #E8833A;
    width: 257px;
    height: 44px;
    font-size: 18px;
    
`
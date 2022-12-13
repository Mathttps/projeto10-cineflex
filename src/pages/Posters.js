import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import carregando from "../assets/carregando.gif"

export default function Posters() {
    const [posters, setPosters] = useState(undefined)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(resposta => setPosters(resposta.data))
        promise.catch(erro => console.log(erro.response.data))
    }, [])

    if (posters === undefined) {
        return <Carregando><img src={carregando} alt="carregando" /></Carregando>
    }

    console.log(posters)
    return (
        <div>
            <Container>
                <SelecFilme>Selecione o filme</SelecFilme>
                <ListaFilmes>
                    {posters.map((m) => <Filmes key={m.id} id={m.id} image={m.posterURL} />)}
                </ListaFilmes>
            </Container>
        </div>
    )
}

function Filmes({ id, image }) {
    return (
        <Link data-test="movie" to={"/sessoes/" + id}>
            <ContainerFilmes>
                <img src={image} alt="poster" width="130" height="190" />
            </ContainerFilmes>
        </Link>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;
    // 
`

const ContainerFilmes = styled.div`
display: flex;
justify-content: center;
padding: 8px;
box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
align-items: center;
`

const ListaFilmes = styled.div`
display: grid;
grid-auto-rows: 1fr;
row-gap: 11px;
margin: 0 auto;
column-gap: 28px;
grid-template-columns: 1fr 1fr;
 
  @media (min-width: 750px) {
      grid-template-columns: repeat(4, 1fr);
  }
  `

const SelecFilme = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 105px;
    font-family: "Roboto";
    color: #293845;
    font-size: 26px;
`
const Carregando = styled.div`
width: 100%;
display: flex;
justify-content: center;
img{
    width: 40%;
}`
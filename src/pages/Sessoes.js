import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Sessoes() {
  const { idFilme } = useParams
  const [horario, sethorario ] = useState(undefined)

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
    promise.then((res) => setHorario(res.data))
  }, [])
return (
  <EscolherSessao>
    Selecione o horário
    <Horarios>
      {horario.days.map(m => (
        <Sessoes horario={m} key={m.id}/> 
      ))}
    </Horarios>
  </EscolherSessao>
)
}

const EscolherSessao = styled.div`
  display: flex;
  font-family: 'Roboto';
`


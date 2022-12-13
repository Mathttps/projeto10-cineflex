import styled from "styled-components";
export default function Opcoes() {
    return (
        <TresOpcoes>
            <div>
                <BotaoRedondo bgColor="#1AAE9E" borderColor="#0E7D71" />
                <div>Selecionado</div>
            </div>
            <div>
                <BotaoRedondo bgColor="#C3CFD9" borderColor="#7B8B99" />
                <div>Disponível</div>
            </div>
            <div>
                <BotaoRedondo bgColor="#FBE192" borderColor="#F7C52B" />
                <div>Indisponível</div>
            </div>
        </TresOpcoes>
    )
}

const TresOpcoes = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #4E5A65;
        font-size: 12px;

        div {
            margin-bottom: 7px;
        }
    }
`
const BotaoRedondo = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
`
import React from "react";
import styled from "styled-components";

export default function Assentos({
    assentoId,
    assentoSelecionado,
    setAssentoSelecionado,
    assentoSelecionadoId,
    setAssentoSelecionadoId,
    assentoNum,
    disponivel
}) {

    const [selecionado, setSelecionado] = React.useState(false);
    React.useEffect(() => {
        if (selecionado) {
            setAssentoSelecionadoId([...assentoSelecionadoId, assentoId]);
            setAssentoSelecionado([...assentoSelecionado, assentoNum]);
            // setSelecionado(!selecionado)
            // const novoNumeroAssento = [...numeroAssento, Number(id)];
            // setNumeroAssento(novoNumeroAssento)
            // const novoLugar = [...lugar, nome];
        } else {
            setAssentoSelecionadoId(assentoSelecionadoId.filter(seat => seat !== assentoId));
            setAssentoSelecionado(assentoSelecionado.filter(seat => seat !== assentoNum));
            // setNumeroAssento(novoNumeroAssento.filter(seat => seat !== assentoNum))
            // const teste = lugar.filter(value => value !== nome)
        }

    }, [selecionado]);

    const cores = { bgColor: "", borderColor: "" };
    if (disponivel) {
        if (selecionado) {
            cores.bgColor = "#1AAE9E";
            cores.borderColor = "#0E7D71"; //
        } else {
            cores.bgColor = "#C3CFD9"; // disponivel  dentro
            cores.borderColor = "#7B8B99";
        }
    } else {
        cores.bgColor = "#FBE192"; // indisponivel
        cores.borderColor = "#F7C52B";
    }

    function assentoescolhido() {
        if (disponivel) {
            setSelecionado(!selecionado);
        } else {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <AssentoBotao data-test="seat" bgColor={cores.bgColor} borderColor={cores.borderColor} onClick={assentoescolhido}>
            {assentoNum}
        </AssentoBotao>
    )
}

const AssentoBotao = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
    font-size: 11px;
    border-radius: 50%;
    cursor: pointer;
`
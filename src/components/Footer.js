import styled from "styled-components";

export default function Footer({imagemFilme, tituloFilme, diaSemana, hora}) {
    const dataDia = (diaSemana !== undefined && hora !== undefined);
    const DiaCerto = diaSemana + " - " + hora;

    return (
        <FooterContent data-test="footer" >
            <div>
                <img src={imagemFilme} width="50" height="70" alt={tituloFilme} />
            </div>
            <div>
                {tituloFilme}<br/>
                {dataDia? DiaCerto: null}
            </div>
        </FooterContent>
    )
}

const FooterContent = styled.div`
    width: 100%;
    height: 116px;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    padding: 11px;
    box-sizing: border-box;
    font-size: 25px;
    border-top: 1px solid #9EADBA;
    background-color: #DFE6ED;
    display: flex;
    font-family: 'Roboto';

    img{
    }

    div:first-child {
        padding: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
    }

    div:last-child {
        margin-left: 16px;
    }
`
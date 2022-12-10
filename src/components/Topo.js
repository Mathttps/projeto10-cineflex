import styled from "styled-components";

export default function Topo(){
    return (
        <Top>
            <h2>CINEFLEX</h2>
        </Top>
    )
}

const Top = styled.div`
width: 100%x;
height: 67px;
background-color: #C3CFD9;
display: flex;
align-items: center;
justify-content: center;

h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
}
`

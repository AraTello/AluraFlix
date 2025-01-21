import styled from "styled-components";

const Titulo = styled.h1`
    background-color: #FFFFFF;
    border-radius: 8px;
    width: max-content;
    padding: 10px;
`;


function TituloCategoria({color, nombre}){
    return(
        <Titulo style={{backgroundColor: color}}>{nombre}</Titulo>
    )
}
export default TituloCategoria
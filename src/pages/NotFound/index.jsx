import styled from "styled-components"


const SeccionError = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 130px;
    gap: 30px;
`;

const TituloError = styled.h1`
    color: #FFFFFF;
    text-shadow: 0px 0px 20px #ff0000;
    font-size: 100px;
`;

const DescripcionError = styled.p`
    color: #FFFFFF;
    text-shadow: 0px 0px 8px #ff0000;
    font-size: 30px;
`;

function NotFound(){
    return(
        <SeccionError>
            <TituloError>404</TituloError>
            <DescripcionError>La página no se encuentra disponible</DescripcionError>
        </SeccionError>
    )
}

export default NotFound
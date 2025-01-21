import styled from "styled-components"


const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    position: relative;
    bottom: 0; 
    right: 0;
    left: 0;
    background-color: #000000;
    box-shadow: #2271D1 0px 40px 36px -28px inset;
`;

const ImgLogo = styled.img`
    width: 10%;
`;

function PieDePag(){
    return(
        <Footer>
            <ImgLogo src="./public/img/icono_aluraflix.png" alt="logo AluraFlix"/>
        </Footer>
    )
}

export default PieDePag
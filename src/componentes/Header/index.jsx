import styled from "styled-components"
import BotonesPrincipales from "../BotonesPrincipales";
import { Link } from "react-router-dom";
import HeaderLinks from "../HeaderLinks";
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 20px 50px;
    background-color: #000000;
    box-shadow: #2271D1 0px -40px 36px -28px inset;
`;

const ImgLogo = styled.img`
    width: 10%;
`;

const MenuHeader = styled.div`
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 20px;
`;

function CabeceraDePag(){
    return(
    <Header>
        <Link to="/">
            <ImgLogo src="./public/img/icono_aluraflix.png" alt="logo AluraFlix"/>
        </Link>
        <MenuHeader>
            <HeaderLinks url="./">
                <BotonesPrincipales>Home</BotonesPrincipales>
            </HeaderLinks>
            <HeaderLinks url="./nuevoVideo">
                <BotonesPrincipales>Nuevo Video</BotonesPrincipales>
            </HeaderLinks>
        </MenuHeader>
    </Header>
    )
}

export default CabeceraDePag
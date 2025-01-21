import styled from "styled-components";
import TituloCategoria from "../TituloCategoria"
import Img from "/public/img/874fa44266e31d1ef1408b08b3b9b20c.jpg"

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 50px;
    color: #FFFFFF;
    gap: 50px;
    background-position: center;
    background: linear-gradient(180deg, #6BD1FF, #262626);
    width:100%;
`;

const ContenedorInformacion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const TituloVideo = styled.h3`
    font-weight: bolder;
    font-size: 30px;
`;

const DescripcionVideo = styled.p`
    font-weight: bolder;
    font-size: 20px;
    text-shadow: 0px 0px 1px #000000;
`;

const ContenidoDestacadoImagen = styled.img`
    width: 40%;
    border-radius: 10px;
    border: 2px solid #6BD1FF;
`;

function Destacado(){
    return(
        <Contenedor>
            <ContenedorInformacion>
                <TituloCategoria>CATEGORIA</TituloCategoria>
                <TituloVideo>VIDEO</TituloVideo>
                <DescripcionVideo>orem ipsum dolor sit amet, consectetur adipiscing elit. 
                    suspendisse maximus tempus mauris a pulvinar. 
                    nam erat arcu, malesuada convallis felis id, dapibus lacinia lorem</DescripcionVideo>
            </ContenedorInformacion>
            <ContenidoDestacadoImagen alt="portada del video" src="img/901ef8448792e2e2a7c9385b66af1565.jpg"/>
        </Contenedor>
    )
}

export default Destacado
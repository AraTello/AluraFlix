import styled from "styled-components"
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 32%;
    border: 4px solid #6BD1FF;
    border-radius: 25px;
`;

const Img = styled.img`
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    z-index: -1;
`;

const ContenedorAcciones = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    padding:20px;
    background-color: #000000;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const BotonesAcciones = styled.h3`
    color: #FFFFFF;
    display: flex;
    align-items:center;
    gap: 5px;
`;

function TarjetaVideo({imagen, titulo}){
    return(
        <Contenedor>
            <Img src={imagen} alt={titulo}/>
            <ContenedorAcciones>
                <BotonesAcciones>Borrar <FaTrashAlt/></BotonesAcciones>
                <BotonesAcciones>Editar <FaEdit/></BotonesAcciones>
            </ContenedorAcciones>
        </Contenedor>
    )
}

export default TarjetaVideo
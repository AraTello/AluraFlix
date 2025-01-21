import styled from "styled-components"
import FormularioAdd from "../../componentes/FormularioAdd"

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    gap: 40px;
    color: #FFFFFF;
`;

const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const SubTitulo = styled.div`
    border-top: 1px solid #494949;
    border-bottom: 1px solid #494949;
    padding: 10px 20px;
`;

function FormNuevoVideo(){
    return(
        <Contenedor>
            <Titulo>
                <h1>Nuevo Video</h1>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
            </Titulo>
            <SubTitulo>
                <h3>Crear Tarjeta</h3>
            </SubTitulo>
            <FormularioAdd/>
        </Contenedor>
    )
}

export default FormNuevoVideo
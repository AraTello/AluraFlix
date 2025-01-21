import styled from "styled-components"
import InputText from "../InputText"
import Select from "../Select"
import TextArea from "../TextArea"
import BotonesPrincipales from "../BotonesPrincipales"
import { useContext } from "react"

const FormEdit = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 80px;
    border: 2px solid #2271D1;
    background: #03122F;
    width: 50%;
    gap: 20px;
`;

const Titulo = styled.h1`
    color: #2271D1;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
`;

const Botones = styled.div`
    display: flex;
    flex-direction; row;
    gap: 30px;
    padding-top: 20px;
`;

function FormularioEditar(){

const { videos, editarVideo } = useContext(GlobalContext);

  const [videoSeleccionado, setVideoSeleccionado] = useState({
    id: null,
    categoria: "",
    titulo: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    editarVideo(videoSeleccionado);
  };


  if (!videoSeleccionado || !videoSeleccionado.id) {
    return <div>ID inválido</div>;
  }

  return (
    <FormEdit onSubmit={onSubmit}>
        <Inputs>
            <InputText onChange={(e) => handleOnChange("titulo", e.target.value)}/>
        </Inputs>
        <Select>

        </Select>
        <Inputs>
            <InputText onChange={(e) => handleOnChange("imagen", e.target.value)}/>
        </Inputs>
        <Inputs>
            <InputText onChange={(e) => handleOnChange("video", e.target.value)}/>
        </Inputs>
        <Inputs>
            <InputText onChange={(e) => handleOnChange("descripcion", e.target.value)}/>
        </Inputs>
    </FormEdit>
  )
}

//pendiente

export default FormularioEditar
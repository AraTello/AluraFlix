import styled from "styled-components"
import InputText from "../InputText"
import Select from "../Select"
import TextArea from "../TextArea"
import BotonesPrincipales from "../BotonesPrincipales"
import { useContext } from "react"

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`;

const Inputs = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
`

const Botones = styled.div`
    display: flex;
    flex-direction; row;
    gap: 30px;
    padding: 20px;
`;


function FormularioAdd(){
  
    const { addVideo, videos } = useContext(GlobalContext);

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [video, setVideo] = useState("");
    const [descripcion, setDescripcion] = useState("");
  
    const onSubmit = (e) => {
      e.preventDefault();
      const nuevoVideo = {
        id: videos.length + 1,
        titulo,
        categoria,
        imagen,
        video,
        descripcion
      };
      addVideo(nuevoVideo);
    };
  
    return (
          <Formulario onSubmit={onSubmit}>
            <Inputs>
                <InputText value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <Select/>
                <InputText value={imagen} onChange={(e) => setImagen(e.target.value)}/>
                <InputText value={video} onChange={(e) => setVideo(e.target.value)}/>
                <TextArea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            </Inputs>
            <Botones>
                <BotonesPrincipales>Guardar</BotonesPrincipales>
                <BotonesPrincipales>Limpiar</BotonesPrincipales>
            </Botones>
          </Formulario>
    );
}

//pendiente


export default FormularioAdd
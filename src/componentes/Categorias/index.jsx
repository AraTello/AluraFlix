import styled from "styled-components"
import TituloCategoria from "../TituloCategoria"
import { useEffect, useState } from "react";
import TarjetaVideo from "../TarjetaVideo";

const Contenedor = styled.div`
    display:flex;
    flex-direction: column;
    padding: 30px 50px;
    gap: 30px;
`;

const ContenedorPorCategoria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function Categorias(){
    //const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        
        fetch(
            "http://localhost:3001/videos"
            )
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);

    return(
    <>
        <Contenedor>
            <ContenedorPorCategoria>
                <TituloCategoria/>
            {videos.map((video) => {
            <TarjetaVideo {...video} key={video.id} />;
            })}
            </ContenedorPorCategoria>
        </Contenedor>
    </>
    )
}
/*

/>;
{videos.map((video) => {
                        <TarjetaVideo {...video} key={video.id} videos={
                            videos.filter(video => video.categoria === categoria.nombre)}/> })}
                )})}


{videos.map((video) => {
    return <TarjetaVideo {...video} key={video.id} />;
    })}
*/


//pendiente

export default Categorias
import { useEffect, useState } from "react";
import Categorias from "../../componentes/Categorias"
import Destacado from "../../componentes/Destacado"
import FormularioEditar from "../../componentes/FormularioEditar"
import TituloCategoria from "../../componentes/TituloCategoria";


function Inicio(){

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch(
        "http://localhost:3001/categorias"
        )
        .then((response) => response.json())
        .then((data) => {
            setCategorias(data);
        });
    }, []);
    
    return(
        <>
            <Destacado/>
            <Categorias/>
        </>
    )
}
/*
{categorias.map((categoria) => {
    return <TituloCategoria {...categoria} key={categoria.id} />;
    })}
*/
export default Inicio
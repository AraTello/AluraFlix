import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


function useFormEditar(){
    const { state, dispatch } = useContext(GlobalContext);

    const abrirEditar = (video) => {
        dispatch({ type: 'SET_VIDEO_A_EDITAR', payload: video })
    }


    const cerrarEditar = () => {
        dispatch({ type: 'SET_VIDEO_A_EDITAR', payload: null })
    }

    const videoEditar = state.videoEditar;

    const editarActivo = state.abrirEditar;

    return { videoEditar, editarActivo, abrirEditar, cerrarEditar }
}

export default useFormEditar
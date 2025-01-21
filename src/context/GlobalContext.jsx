import { createContext, useEffect, useReducer } from "react";


export const GlobalContext = createContext();

const initialState = {
    listaVideos: [],
    videoAEditar: null,
    formEditar: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_VIDEOS_LISTA':
            return {...state, listaVideos: action.payload};

        case 'SET_VIDEO_MOSTRAR_EDITAR':
            return {...state, videoAEditar: action.payload, formEditar: action.payload != null ? true : false};
            
        case 'SET_VIDEO':
            const actualizarVideo = action.payload;
  
            const actualizarVideos = state.listaVideos.map((listaVideos) => {
                if (listaVideos.id === actualizarVideo.id) {
                    return actualizarVideo;
                }
                return listaVideos;
        });
  
        return {
          ...state,
          listaVideos: actualizarVideos
        };
    
        case 'ADD_VIDEO':
            return {...state, videos: [...state.videos, action.payload]};

        case 'DEL_VIDEO':
            return {...state, videos: state.videos.filter((video) => video.id !== action.payload)};
        
        default:
            return state;
    }
};

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:3001/videos');
            const data = await res.json();
            dispatch({ type: 'SET_VIDEOS_LISTA', payload: data })
        }

        setTimeout(() => getData(), 5000);
    }, []);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
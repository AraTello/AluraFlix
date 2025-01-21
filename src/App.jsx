import Estructura from './pages/Estructura'
import Inicio from './pages/Inicio'
import FormNuevoVideo from './pages/FormNuevoVideo'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import GlobalContextProvider from './context/GlobalContext'


const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Roboto', serif;
        background: #262626;
    }
`;


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles/>
            <GlobalContextProvider>
                <Routes>
                    <Route path="/" element={<Estructura />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="nuevoVideo" element={<FormNuevoVideo />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Routes>
            </GlobalContextProvider>
        </BrowserRouter>
    )
}

//<Route path=":id" element={<Player />}></Route>

export default App
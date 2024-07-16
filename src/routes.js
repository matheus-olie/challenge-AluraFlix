import React from 'react';
import NaoEncontrada from "pages/NaoEncontrada"
import Inicio from "./pages/Inicio"
import NovoVideo from "./pages/NovoVideo"
import PaginaBase from "./pages/PaginaBase"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "components/Player"
import NovosVideos from 'pages/NovosVideos';

function AppRoutes () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="novovideo" element={<NovoVideo />}></Route>
                    <Route path='novosvideos' element={<NovosVideos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path='*' element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
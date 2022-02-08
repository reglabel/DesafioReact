import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//Importar as páginas
import Home from './views/pages/home/Home';
import Login from './views/pages/login/Login';
import My from './views/pages/my/My';

//Criar o componentes com as rotas
function RoutesJS(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/my" element={<My/>} />
            </Routes>        
        </BrowserRouter>
    );
};

export default RoutesJS;
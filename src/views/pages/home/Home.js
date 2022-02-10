import React from 'react';
import Header from '../../../views/base/Header';
import { Link } from 'react-router-dom';
//import { useHistory, useLocation } from 'react-router-dom';

const Home = () => {
    //const location = useLocation();
    //const history = useHistory();

    /*function goBack(){
        history.goBack();
    }*/
    return (
        <div>
            <Header/>
            {/*mt é margin, grid é pra folha de grid, tá contando as colunas. gap-x ou gap-y entre os itens das colunas. esm é a menor tela, dps lg e xl.
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            </div>*/}

            <div className="w-full h-80 bg-x-repeat bg-right" style={{ backgroundImage: 'url(https://s2.glbimg.com/EKq6G_dTE6GLKmZWYLUwzq2MX1M=/e.glbimg.com/og/ed/f/original/2020/08/18/disney_5_brands.jpg)'}}>
            </div>

            <h1>vc esta na home</h1>

            <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/my">Área de usuário</Link>
            </li>
            </ul>


            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-y-6 sm:grid-cols-2 xl:gap-y-8">
                <div className="w-full box-border p-8 rounded-md group-hover:opacity-75 lg:aspect-none ">
                    <div className="backdrop-blur-sm bg-white/30 rounded-md p-8">
                        <h1 className="text-5xl">ola</h1>
                        <h1>ola</h1>
                        <h1>ola</h1>
                    </div> 
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-y-6 sm:grid-cols-2 xl:gap-y-8">
                <div className="w-full box-border p-8 rounded-md group-hover:opacity-75 lg:aspect-none ">
                    <div className="backdrop-blur-sm bg-white/30 rounded-md p-8">
                        <h1 className="text-5xl">ola</h1>
                        <h1>ola</h1>
                        <h1>ola</h1>
                    </div> 
                </div>
            </div>

            
        </div>
    );
};
  
 export default Home;
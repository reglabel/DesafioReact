import React from 'react';
import Header from '../../../views/base/Header';
import Footer from '../../../views/base/Footer';
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

            <div className="mt-6 w-full grid pt-12 pr-8 pl-8 justify-items-center gap-y-6">
                <h1 className="text-3xl font-bold text-stone-100 leading-loose text-center">Com o Combo+, você pode aproveitar o Disney+ e o Star+ por um preço único.</h1>
                <img className="h-24 md:h-32" src="https://cnbl-cdn.bamgrid.com/assets/b4b2cbd89ae6b15cc228c8e130514786030d9661e34b3865c1a778dd38ab6863/original" alt="Combo Disney+ e Star+"/>
                <button className="w-3/5 inline-flex items-center justify-center px-6 py-4 rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-500 p-4">Assine por R$ 45,90*</button>
                <div className="gap-y-3 text-center">
                    <p className="text-sm text-stone-400">*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
                    <p className="text-xl text-slate-200 underline">Assinar somente o Disney+</p>
                    <p className="text-lg text-stone-400">R$ 27,90/mês* ou R$ 279,90/ano à vista*</p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-y-6 sm:grid-cols-2 xl:gap-y-8 justify-items-center">
                <div className="w-full grid p-8 rounded-md">
                    <div className="grid p-8 font-sans content-center">
                        <h1 className="text-4xl font-bold text-stone-100 leading-loose">Assista do seu jeito</h1>
                        <p className="text-xl text-slate-400 leading-relaxed">Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
                    </div> 
                </div>
                <div className="w-full grid p-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/c0a264881f6f269485d94228f8904ea1d4b8b02b8da0dfaaccc65ee723582e9a/original" alt="dispositivos disponíveis"/>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-y-6 sm:grid-cols-2 xl:gap-y-8 justify-items-center">
                <div className="w-full grid p-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/f197d6cdc654e2a8737e9ca0275c27f9913f73a3a046c0541a1f8bc59a9d1422/original" alt="Combo+"/>
                </div>
                <div className="w-full grid p-8 rounded-md">
                    <div className="grid p-8 font-sans content-center">
                        <p className="text-xl text-slate-400 leading-relaxed">Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
                        <div className="grid pt-5 content-start">
                            <Link to="/" className="w-3/5 inline-flex items-center justify-center px-6 py-4 rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-500">
                                Assine o combo
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>

            <div className="grid justify-items-end grid-coluns-1gap-y-10 gap-y-6 xl:gap-y-8 bg-no-repeat bg-cover bg-top md:h-96" style={{ backgroundImage: 'url(https://cnbl-cdn.bamgrid.com/assets/36b498725697f2dad5b28c08358207cf7d86f6e81d5476c00d1f25f4178d4d6c/original)'}}>
                <div className="w-3/5 grid p-12 rounded-md">
                    <div className="grid p-8 font-sans content-center">
                        <h1 className="text-3xl font-bold text-stone-100 leading-loose">Baixe filmes e séries</h1>
                        <p className="text-xl text-slate-400 leading-relaxed">Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.</p>
                    </div> 
                </div>
            </div>

            <div className="mt-6 w-full grid pt-12 pr-8 pl-8 justify-items-center">
                <h1 className="text-4xl font-bold text-stone-100 leading-loose">Disponível nos seus dispositivos favoritos</h1>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-y-6 justify-items-center md:grid-cols-2 xl:grid-cols-4 xl:gap-y-8 ">
                <div className="w-full grid place-content-start pb-8 pr-8 pl-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original" alt="TV"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-3xl font-bold text-stone-100 leading-loose text-center">TV</h1>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">Amazon Fire TV<br/>Android TV<br/>Apple TV<br/>Chromecast<br/>TVs LG<br/>Roku<br/>Samsung</p>
                    </div>
                </div>
                <div className="w-full grid place-content-start pb-8 pr-8 pl-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original" alt="Computer"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-3xl font-bold text-stone-100 leading-loose text-center">Computador</h1>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">Chrome OS<br/>MacOS<br/>PC Windows</p>
                    </div>
                </div>
                <div className="w-full grid place-content-start pb-8 pr-8 pl-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original" alt="Celular e Tablet"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-3xl font-bold text-stone-100 leading-loose text-center">Celulares e Tablets</h1>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">Tablets Amazon Fire<br/>Celulares e Tablets Android<br/>iPhone e iPad</p>
                    </div>
                </div>
                <div className="w-full grid place-content-start pb-8 pr-8 pl-8">
                    <img src="https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original" alt="Videogame"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-3xl font-bold text-stone-100 leading-loose text-center">Videogames</h1>
                        <p className="text-lg text-gray-300 leading-relaxed text-center">PS4<br/>PS5<br/>Xbox One<br/>Xbox Series X<br/>Xbox Series S</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
  
 export default Home;
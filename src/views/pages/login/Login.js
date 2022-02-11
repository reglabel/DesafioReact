import React from 'react';
import HeaderPerfis from '../../../views/base/HeaderPerfis';
import { Link } from 'react-router-dom';

import {
    PlusIcon,
} from '@heroicons/react/outline';

const Login = () => {
    return (
        <div>
            <HeaderPerfis />
            <div className="w-full grid pt-12 pr-8 pl-8 justify-items-center">
                <h1 className="text-2xl font-bold text-stone-100 leading-loose">Quem vai assistir?</h1>
            </div>

            <div className="grid grid-cols-1 gap-1 justify-items-center 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-72 mr-20 ml-20 mt-10 min-h-full">
                <div className="grid place-content-center">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EACE56EDBBEE93B7E563E50EC2F8ECB4EB7762AF61CBAAC79A6BED4D7FFB2554/scale?width=280&aspectRatio=1.00&format=png" alt="Pooh" className="w-32"/>
                    <div className="grid font-sans justify-items-center">
                        <Link to="/my" className="text-xl font-bold text-neutral-400 leading-loose text-center">Perfil 1</Link>
                    </div>
                </div>

                <div className="grid place-content-center">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/44D4A795DAF66A3E364F6E6AA548214BD37B4CF9A2F016EAFFEAD874E4AEB507/scale?width=280&aspectRatio=1.00&format=png" alt="Pumba" className="w-32"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-xl font-bold text-stone-100 leading-loose text-center">Perfil 2</h1>
                    </div>
                </div>

                <div className="grid place-content-center">
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/102616469E4DFB2559E547D4779BC80CCBD4D5DE63FF77CE32795486B34EEDC9/scale?width=280&aspectRatio=1.00&format=png" alt="Mulan" className="w-32"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-xl font-bold text-stone-100 leading-loose text-center">Perfil 3</h1>
                    </div>
                </div>

                <div className="grid place-content-center">
                    <PlusIcon className="stroke-gray-300 box-border bg-origin-content p-10 bg-slate-700/50 rounded-full w-32"/>
                    <div className="grid font-sans justify-items-center">
                        <h1 className="text-xl font-bold text-stone-100 leading-loose text-center">Adicionar perfil</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default Login;
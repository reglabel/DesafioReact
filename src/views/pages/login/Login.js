import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1>Voce esta no login!</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
};
  
export default Login;
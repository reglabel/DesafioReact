import React from 'react';
import { Link } from 'react-router-dom';

const My = () => {
    return (
        <div>
            <h1>Voce esta no my!</h1>
            <Link to="/">retornar a página inicial</Link>
            <br/>
            <Link to="/login">retornar ao login</Link>
        </div>
    );
};
  
export default My;
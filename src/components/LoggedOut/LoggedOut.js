import { useState } from 'react';
import NavBar from '../../styles/NavBar';

export default function LoggedOut(){
    return (
        <>
            <NavBar>
                <div>
                    <p>Entrar</p>
                    <h1>Cadastrar-se</h1>
                </div>
            </NavBar>
        </>
    );
};


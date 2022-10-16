import { useState } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import Logo from '../../styles/Logo';
import logo from '../../assets/Logo.png';

export default function LoggedOut(){
    return (
        <>
            <NavBar>
                <div>
                    <p>Entrar</p>
                    <h1>Cadastrar-se</h1>
                </div>
            </NavBar>
            <Container>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo}/>
                </Logo>
            </Container>
        </>
    );
};


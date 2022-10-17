import { useState } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import { Logo, Trophy, Ranking } from '../../styles/styles.js';
import logo from '../../assets/Logo.png';
import trophy from '../../assets/Vector.svg';

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
                <Trophy>
                    <img src={trophy}/>
                    <p>Ranking</p>
                </Trophy>
                <Ranking>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                    <p>a</p>
                </Ranking>
                <h2>Crie sua conta para usar nosso serviço!</h2>
            </Container>
        </>
    );
};


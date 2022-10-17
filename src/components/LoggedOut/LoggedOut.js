import { useState } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import { Logo, Trophy } from '../../styles/styles.js';
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
            </Container>
        </>
    );
};


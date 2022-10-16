import styled from 'styled-components';
import { useState } from 'react';

export default function LoggedOut(){
    return (
        <>
            <NavBar>
                <Entrys>
                    <p>Entrar</p>
                    <h1>Cadastrar-se</h1>
                </Entrys>
            </NavBar>
        </>
    );
};

const NavBar = styled.div`
    height: 100px;
    width: 100%;
    padding-right: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Entrys = styled.div`
    display: flex;
    p{
        margin-right: 25px;
        font-size: 14px;
        font-weight: 400;
        color: #5D9040;
    }
    h1{
        color: #9C9C9C;
        margin-right: 25px;
        font-size: 14px;
        font-weight: 400;
    }
`;
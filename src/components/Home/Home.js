import { useState, useEffect } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import { Logo} from '../../styles/styles.js';
import logo from '../../assets/Logo.png';
import { getUser } from '../services/shortly';

export default function Home(){

    const [name, setName] = useState('');

    useEffect(() => {
        getUser()
        .then((data) => {
            setName(data.data.name);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <NavBar>
                <div>
                    <h1>Home</h1>
                    <h1>Ranking</h1>
                    <h1>Sair</h1>
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
}
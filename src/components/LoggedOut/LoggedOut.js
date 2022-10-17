import { useState, useEffect } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import { Logo, Trophy, Ranking } from '../../styles/styles.js';
import logo from '../../assets/Logo.png';
import trophy from '../../assets/Vector.svg';
import { listRanking } from '../services/shortly';
import { Link } from 'react-router-dom';

export default function LoggedOut(){

    const [list, setList] = useState([]);

    useEffect(() => {
        listRanking().then((data) => {
            setList(data.data);
        }).catch((error) => {
            console.log(error.response.status);
        });
        
    }, []);

    return (
        <>
            <NavBar>
                <div>
                    <Link to='/signin' style={{ textDecoration: 'none' }}><p>Entrar</p></Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }}><h1>Cadastrar-se</h1></Link>
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
                    {list.map((value, index) => 
                    <p key={index}>
                        {index+1}. {value.name} - {value.linksCount} links - {value.visitCount} visualizações
                    </p>)}
                </Ranking>
                <Link to='/signup' style={{ textDecoration: 'none' }}>
                    <h2>Crie sua conta para usar nosso serviço!</h2>
                </Link>      
            </Container>
        </>
    );
};


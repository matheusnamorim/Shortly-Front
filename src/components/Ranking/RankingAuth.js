import NavBar from "../../styles/NavBar";
import Container from "../../styles/Container";
import { Name, Logo, Trophy, Ranking } from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { getUser, listRanking } from "../services/shortly";
import {useEffect, useState} from 'react';
import logo from '../../assets/Logo.png';
import trophy from '../../assets/Vector.svg';

export default function RankingAuth(){
    
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getUser()
        .then((data) => {
            setName(data.data.name);
        }).catch((error) => {
            console.log(error);
        });

        listRanking().then((data) => {
            setList(data.data);
        }).catch((error) => {
            console.log(error.response.status);
        });

    }, [reload]);

    setInterval(function(){
        setReload(!reload);
     }, 10000);

    function exitRanking(){
        localStorage.setItem('shortly', JSON.stringify(''));
        navigate('/');
    }

    return (
        <>
            <NavBar>
                <div>
                    <h1 onClick={() => navigate('/home')}>Home</h1>
                    <h1 onClick={() => navigate('/ranking')}>Ranking</h1>
                    <h1 onClick={() => exitRanking()}>Sair</h1>
                </div>
                <Name>Seja bem-vindo(a), {name}!</Name>
            </NavBar> 
            <Container >
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

            </Container>
        </>
    );
}
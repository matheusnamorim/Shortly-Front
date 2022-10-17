import { useState, useEffect } from 'react';
import NavBar from '../../styles/NavBar';
import Container from '../../styles/Container';
import { Logo, Name } from '../../styles/styles.js';
import logo from '../../assets/Logo.png';
import { getUser, myUrls, shorten, delete_Url, exit } from '../services/shortly';
import styled from 'styled-components';
import {AiTwotoneDelete} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

export default function Home(){

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [listUrls, setListUrls] = useState([]);
    const [url, setUrl] = useState('');
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getUser()
        .then((data) => {
            setName(data.data.name);
        }).catch((error) => {
            console.log(error);
        });

        myUrls()
        .then((data) => {
            setListUrls(data.data.shortenedUrls);
        }).catch((error) => {
            if(error.response.status === 401) alert('Token inválidos!');
            if(error.response.status === 404) alert('Usuário não autenticado!');
        });
    }, [reload]);

    setInterval(function(){
        setReload(!reload);
     }, 10000);

    function shortenUrl(event){
        event.preventDefault();
        
        shorten({
            url,
        }).then(() => {
            setReload(!reload);
        }).catch((error) => {
            console.log(error);
        });
    };

    function deleteUrl(id){
        if(window.confirm('Deseja realmente excluir essa URL?')){
            delete_Url(id).then(() => {
                window.location.reload();
            }).catch((error) => {
                console.log(error);
            })
        }
    };

    return (
        <>
            <NavBar>
                <div>
                    <h1 onClick={() => navigate('/home')}>Home</h1>
                    <h1 onClick={() => navigate('/ranking')}>Ranking</h1>
                    <h1 onClick={() => exit()}>Sair</h1>
                </div>
            </NavBar> 
            <Name>Seja bem-vindo(a), {name}!</Name>
            <Container aligner={true}>
                 <Logo>
                    <h1>Shortly</h1>
                    <img src={logo}/>
                </Logo>    
                <Infos>
                    <FormUrl onSubmit={shortenUrl}>
                        <input value={url} onChange={(e) => setUrl(e.target.value)} type='url' placeholder='Links que cabem no bolso' required/>
                        <button>Encurtar link</button>
                    </FormUrl>
                    {listUrls.map((value, index) => (
                        <Urls key={index}>
                            <div>
                                <p>{value.url}</p>
                                <p>{value.shortUrl}</p>
                                <p>Quantidade de visitantes: {value.visitCount}</p>
                            </div>
                            <span onClick={() => deleteUrl(value.id)}>
                                <AiTwotoneDelete color="red" size='25px'/>
                            </span>
                        </Urls>
                    ))}
                </Infos>
            </Container>
        </>
    );
}

const Infos = styled.div`
    padding: 70px 40px;
    width: 100vw;
`;

const FormUrl = styled.form`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input{
        width: 70%;
        height: 60px;
        color: #9C9C9C;
        font-size: 14px;
        font-weight: 400;
        padding-left: 20px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.52);
        border-radius: 12px;
    }
    input::placeholder{
        color: #9C9C9C;
        font-size: 14px;
    }

    button{
        border-radius: 12px;
        height: 60px;
        width: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #5D9040;
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
`;

const Urls = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    height: 60px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.52);
    border-radius: 12px;

    div{
        height: 100%;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px 0 20px;
        background-color: #80CC74;
        border-radius: 12px 0px 0px 12px;
    }

    p{
        font-size: 14px;
        font-weight: 400;
        color: #FFF;
    }
    span{
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`;
import NavBar from "../../styles/NavBar";
import { useNavigate } from "react-router-dom";
import Container from "../../styles/Container";
import { Logo, Form } from "../../styles/styles";
import logo from '../../assets/Logo.png';
import { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { sign_Up } from "../services/shortly";

export default function SignUp(){

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [msgbtn, setMsgBtn] = useState('Criar Conta');
    const [isDisabled, setIsDisabled] = useState(false);

    function registerUser(event){
        event.preventDefault();
        setIsDisabled(true);
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);

        setTimeout(function(){
            if(password === passwordConfirm){
                
                    sign_Up({
                        name,
                        email,
                        password,
                        confirmPassword: passwordConfirm
                    }).then(() => {
                        navigate('/');
                    }).catch((error) => {
                        if(error.response.status === 422) alert('Dados inválidos!');
                        if(error.response.status === 409) alert('E-mail em uso!');
                        setIsDisabled(false);
                        setMsgBtn('Cadastrar');
                    });
                
            }else{
                alert('Senhas não coincidem');
                setIsDisabled(false);
                setMsgBtn('Cadastrar');
            }
        }, 1000);
    }
    
    function redirect(type){
        if(!isDisabled){
            if(type === '1') navigate('/signin');
            if(type === '2') navigate('/signup');
        }
    }

    return (
        <>
            <NavBar>
                <div>
                    <p onClick={() => redirect('1')}>Entrar</p>
                    <h1 onClick={() => redirect('2')}>Cadastrar-se</h1>
                </div>
            </NavBar> 
            <Container aligner={true}>
                <Logo>
                    <h1>Shortly</h1>
                    <img src={logo}/>
                </Logo> 
                <Form onSubmit={registerUser}>
                    <input disabled={isDisabled} value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' required/>
                    <input disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-mail' required/>
                    <input disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' required/>
                    <input disabled={isDisabled} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type='password' placeholder='Confirmar senha' required/>
                    <button disabled={isDisabled}>{msgbtn}</button>
                </Form>
            </Container>
        </>
        );
};
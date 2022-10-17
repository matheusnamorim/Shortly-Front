import NavBar from "../../styles/NavBar";
import Container from "../../styles/Container";
import { Logo, Form } from "../../styles/styles";
import logo from '../../assets/Logo.png';
import { useState } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { sign_In } from "../services/shortly";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [msgbtn, setMsgBtn] = useState('Entrar');

  function login(event){
    event.preventDefault();
    setIsDisabled(true);
    setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);

    setTimeout(function(){
        sign_In({
            email,
            password
        }).then((data) => {
            const dadosSerializados = JSON.stringify(data.data);
            localStorage.setItem('shortly', dadosSerializados);
            navigate('/');
        }).catch((error) => {
            if(error.response.status === 401) alert('Usuário não encontrado!');
            if(error.response.status === 422) alert('Dados inválidos!');
            setIsDisabled(false);
            setMsgBtn('Entrar');
        });
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
          <Form onSubmit={login}>
              <input disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='E-mail' required/>
              <input disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' required/>
              <button disabled={isDisabled}>{msgbtn}</button>
          </Form>
      </Container>
    </>
    );
};
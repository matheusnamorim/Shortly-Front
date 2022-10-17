import NavBar from "../../styles/NavBar";
import { Link } from "react-router-dom";
import Container from "../../styles/Container";
import { Logo, Form } from "../../styles/styles";
import logo from '../../assets/Logo.png';

export default function SignIn(){
    return (
      <>
          <NavBar>
            <div>
                <Link to='/signin' style={{ textDecoration: 'none' }}><p>Entrar</p></Link>
                <Link to='/signup' style={{ textDecoration: 'none' }}><h1>Cadastrar-se</h1></Link>
            </div>
        </NavBar> 
        <Container aligner={true}>
            <Logo>
                <h1>Shortly</h1>
                <img src={logo}/>
            </Logo> 
            <Form onSubmit={(e) => e.preventDefault()}>
                <input placeholder='E-mail'/>
                <input placeholder='Senha'/>
                <button>Entrar</button>
            </Form>
        </Container>
      </>
      );
  };
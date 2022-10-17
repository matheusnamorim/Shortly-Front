import GlobalStyle from '../styles/globalStyles.js';
import LoggedOut from './LoggedOut/LoggedOut.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoggedOut/>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path="*" element={<LoggedOut/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
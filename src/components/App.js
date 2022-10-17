import GlobalStyle from '../styles/globalStyles.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import PrivatePage from './PrivatePage/PrivatePage.js';

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrivatePage></PrivatePage>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path="*" element={<PrivatePage></PrivatePage>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
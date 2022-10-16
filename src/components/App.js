import GlobalStyle from '../styles/globalStyles.js';
import LoggedOut from './LoggedOut/LoggedOut.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoggedOut/>}/>
                    <Route path="*" element={<LoggedOut/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
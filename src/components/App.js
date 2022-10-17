import GlobalStyle from '../styles/globalStyles.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp.js';
import PrivatePage from './PrivatePage/PrivatePage.js';
import PrivateRanking from './PrivatePage/PrivateRanking.js';
import RankingAuth from './Ranking/RankingAuth.js';

export default function App(){
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrivatePage></PrivatePage>}/>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/ranking' element={<PrivateRanking><RankingAuth/></PrivateRanking>}/>
                    <Route path="*" element={<PrivatePage></PrivatePage>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
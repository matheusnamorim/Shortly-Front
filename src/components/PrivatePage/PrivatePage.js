import Home from "../Home/Home";
import LoggedOut from "../LoggedOut/LoggedOut";

export default function PrivatePage(){

    const auth = JSON.parse(localStorage.getItem('shortly'));

    if(auth){
        return <Home/>;
    }else{
        return <LoggedOut/>;
    }
    
}

export default function PrivateRanking({children}){

    const auth = JSON.parse(localStorage.getItem('shortly'));

    if(auth){
        return <>{children}</>;
    }
    return <></>;
}
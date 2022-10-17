import axios from 'axios';

const BASE_URL = 'https://shortlyamorim.herokuapp.com';

function listRanking(){
    const promise = axios.get(`${BASE_URL}/ranking`);
    return promise;
}

function sign_Up(body){
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

export {listRanking, sign_Up};
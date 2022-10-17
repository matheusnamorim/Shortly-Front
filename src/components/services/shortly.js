import axios from 'axios';

const BASE_URL = 'https://shortlyamorim.herokuapp.com';

function listRanking(){
    const promise = axios.get(`${BASE_URL}/ranking`);
    return promise;
}

export {listRanking};
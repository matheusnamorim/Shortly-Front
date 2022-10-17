import axios from 'axios';

const BASE_URL = 'https://shortlyamorim.herokuapp.com';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('shortly'));
    const config = {
        headers:{Authorization: `Bearer ${auth.token}`}
    }
    return config;
};

function listRanking(){
    const promise = axios.get(`${BASE_URL}/ranking`);
    return promise;
};

function sign_Up(body){
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
};

function sign_In(body){
    const promise = axios.post(`${BASE_URL}/signin`, body);
    return promise;
};

function getUser(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/user`, config);
    return promise;
};

function myUrls(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/users/me`, config);
    return promise;
};

function shorten(body){
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/urls/shorten`, body, config);
    return promise;
};

function delete_Url(body){
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/urls/${body}`, config);
    return promise;
};

function exit(){
    localStorage.setItem('shortly', JSON.stringify(''));
    window.location.reload();
}

export {listRanking, sign_Up, sign_In, getUser, myUrls, shorten, delete_Url, exit};
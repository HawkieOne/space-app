import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 

const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/';

const getLaunches = () => {
    return axios
        .get(`${BASE_URL}launch/upcoming`)
        .then(handleResponse) 
        .catch(handleError); 
}

const getEvents = () => {
    return axios
        .get(`${BASE_URL}event/upcoming`)
        .then(handleResponse) 
        .catch(handleError); 
  };

const getAgencies = () => {
    return axios
        .get(`${BASE_URL}agencies`)
        .then(handleResponse) 
        .catch(handleError); 
};

const apiProvider = {
    getLaunches,
    getEvents,
    getAgencies
}

export default apiProvider;
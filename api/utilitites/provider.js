import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 

const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/';

const getLaunches = () => {
    return axios
        .get(`${BASE_URL}launch/upcoming`)
        .then(handleResponse) 
        .catch(handleError); 
}
const getPreviousLaunches = () => {
    return axios
        .get(`${BASE_URL}launch/previous`)
        .then(handleResponse) 
        .catch(handleError); 
}

const getEvents = (link) => {
    console.log(link);
    if (link) {
        return axios
        .get(link)
        .then(handleResponse) 
        .catch(handleError); 
    }
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

const getAstronauts = () => {
    return axios
        .get(`${BASE_URL}astronaut`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getSpaceStations = () => {
    return axios
        .get(`${BASE_URL}spacestation/?limit=20`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getExpeditions = () => {
    return axios
        .get(`${BASE_URL}expedition`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getDockings = () => {
    return axios
        .get(`${BASE_URL}docking_event`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getLaunchVehicles = () => {
    return axios
        .get(`${BASE_URL}launcher`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getSpacecrafts = () => {
    return axios
        .get(`${BASE_URL}spacecraft`)
        .then(handleResponse) 
        .catch(handleError); 
};

const getLocations = () => {
    return axios
        .get(`${BASE_URL}location`)
        .then(handleResponse) 
        .catch(handleError); 
};




const apiProvider = {
    getLaunches,
    getEvents,
    getAgencies,
    getAstronauts,
    getSpaceStations,
    getExpeditions,
    getDockings,
    getLaunchVehicles,
    getSpacecrafts,
    getLocations,
    getPreviousLaunches,
}

export default apiProvider;
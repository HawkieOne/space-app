import axios from 'axios'
import { handleResponse, handleError } from './response'

export const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/'

const getLaunches = () => {
  return axios
    .get(`${BASE_URL}launch/upcoming`)
    .then(handleResponse)
    .catch(handleError)
}
const getPreviousLaunches = () => {
  return axios
    .get(`${BASE_URL}launch/previous`)
    .then(handleResponse)
    .catch(handleError)
}

const getData = (link: string) => {
    return axios.get(link).then(handleResponse).catch(handleError)
}

const apiProvider = {
  getLaunches,
  getData,
  getPreviousLaunches,
}

export default apiProvider

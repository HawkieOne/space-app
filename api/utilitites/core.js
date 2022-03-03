import apiProvider from './provider';

export class ApiCore {
    constructor(options) {
        if (options.launches) {
            this.getLaunches = () => {
                return apiProvider.getLaunches();
            }
        }

        if (options.events) {
            this.getEvents = () => {
                return apiProvider.getEvents();
            }
        }

        if (options.agencies) {
            this.getAgencies = () => {
                return apiProvider.getAgencies();
            }
        }

        if(options.astronauts) {
            this.getAstronauts = () => {
                return apiProvider.getAstronauts();
            }
        }
    }
}
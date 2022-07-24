import apiProvider from './provider';

export class ApiCore {
    constructor(options) {
        if (options.launches) {
            this.getLaunches = () => {
                return apiProvider.getLaunches();
            }
        }
        if (options.previousLaunches) {
            this.getPreviousLaunches = () => {
                return apiProvider.getPreviousLaunches();
            }
        }

        if (options.events) {
            this.getEvents = (link) => {
                return apiProvider.getEvents(link);
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

        if(options.spacestations) {
            this.getSpaceStations = () => {
                return apiProvider.getSpaceStations();
            }
        }

        if(options.expeditions) {
            this.getExpeditions = () => {
                return apiProvider.getExpeditions();
            }
        }

        if(options.dockings) {
            this.getDockings = () => {
                return apiProvider.getDockings();
            }
        }

        if(options.launchVehicles) {
            this.getLaunchVehicles = () => {
                return apiProvider.getLaunchVehicles();
            }
        }

        if(options.spacecrafts) {
            this.getSpacecrafts = () => {
                return apiProvider.getSpacecrafts();
            }
        }

        if(options.locations) {
            this.getLocations = () => {
                return apiProvider.getLocations();
            }
        }
    }
}
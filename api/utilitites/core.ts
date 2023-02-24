import apiProvider from './provider'

interface ApiCoreProps {
  [key: string]: boolean
}

export const ApiCore = (options: ApiCoreProps) => {
  var getLaunches = null
  var getPreviousLaunches = null
  var getEvents = null
  var getAgencies = null
  var getAstronauts = null
  var getSpacecrafts = null
  var getSpaceStations = null
  var getExpeditions = null
  var getDockings = null
  var getLaunchVehicles = null
  var getLocations = null
  var getSearchQuery = null;

  if (options.launches) {
    getLaunches = () => {
      return apiProvider.getLaunches()
    }
  }
  if (options.previousLaunches) {
    getPreviousLaunches = () => {
      return apiProvider.getPreviousLaunches()
    }
  }

  if (options.events) {
    getEvents = (link: string) => apiProvider.getData(link)
  }

  if (options.agencies) {
    getAgencies = (link: string) => apiProvider.getData(link)
  }

  if (options.astronauts) {
    getAstronauts = (link: string) => apiProvider.getData(link)
  }

  if (options.spacestations) {
    getSpaceStations = (link: string) => apiProvider.getData(link)
  }

  if (options.expeditions) {
    getExpeditions = (link: string) => apiProvider.getData(link)
  }

  if (options.dockings) {
    getDockings = (link: string) => apiProvider.getData(link)
  }

  if (options.launchVehicles) {
    getLaunchVehicles = (link: string) => apiProvider.getData(link)
  }

  if (options.spacecrafts) {
    getSpacecrafts = (link: string) => apiProvider.getData(link)
  }

  if (options.locations) {
    getLocations = (link: string) => apiProvider.getData(link)
  }

  if (options.searchQuery) {
    getSearchQuery = (link:string) => apiProvider.getData(link);
  }

  return {
    getLaunches,
    getPreviousLaunches,
    getEvents,
    getAgencies,
    getAstronauts,
    getSpacecrafts,
    getSpaceStations,
    getExpeditions,
    getDockings,
    getLaunchVehicles,
    getLocations,
    getSearchQuery
  }
}

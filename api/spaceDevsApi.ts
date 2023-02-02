import { ApiCore } from './utilitites/core'

export const spaceAPI = ApiCore({
  events: true,
  launches: true,
  previousLaunches: true,
  agencies: true,
  astronauts: true,
  spacestations: true,
  expeditions: true,
  dockings: true,
  launchVehicles: true,
  spacecrafts: true,
  locations: true,
})

import { ApiCore } from "./utilitites/core";

export const spaceAPI = new ApiCore({
    events: true,
    launches: true,
    agencies: true,
    astronauts: true,
    spacestations: true,
    expedition: true,
    dockings: true,
    launchVehicles: true,
    spacecrafts: true,
    locations: true,
});
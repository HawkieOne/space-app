import { ApiCore } from "./utilitites/core";

export const spaceAPI = new ApiCore({
    events: true,
    launches: true,
    agencies: true,
});
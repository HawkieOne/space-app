import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import LaunchVehicleCard from '../components/LaunchVehicle/LaunchVehicleCard'
import Page from '../components/shared/Page'

export default function LaunchVehicles() {

  return (
    <Page 
    title="Launch vehicles"
    listItem={<LaunchVehicleCard />}
    fetchFunc={spaceAPI.getLaunchVehicles!}
    baseLink={`${BASE_URL}launcher`}
/>
  )
}

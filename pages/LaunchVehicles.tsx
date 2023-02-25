import { spaceAPI } from '../api/spaceDevsApi'
import LaunchVehicleCard from '../components/LaunchVehicle/LaunchVehicleCard'
import Page from '../components/shared/Page'

export default function LaunchVehicles() {
  return (
    <Page
      title="Launch vehicles"
      listItem={<LaunchVehicleCard />}
      fetchFunc={spaceAPI.getLaunchVehicles!}
      baseLink={`launcher`}
      showSearch
      showScrollButton
    />
  )
}

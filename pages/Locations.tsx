import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import LocationCard from '../components/Location/LocationCard'
import Page from '../components/shared/Page'

export default function Locations() {
  return (
    <Page
      title="Locations"
      listItem={<LocationCard />}
      fetchFunc={spaceAPI.getLocations!}
      baseLink={`${BASE_URL}location`}
    />
  )
}

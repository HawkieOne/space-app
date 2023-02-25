import { spaceAPI } from '../api/spaceDevsApi'
import LocationCard from '../components/Location/LocationCard'
import Page from '../components/shared/Page'

export default function Locations() {
  return (
    <Page
      title="Locations"
      listItem={<LocationCard />}
      fetchFunc={spaceAPI.getLocations!}
      baseLink={`location`}
      showSearch
      showScrollButton
    />
  )
}

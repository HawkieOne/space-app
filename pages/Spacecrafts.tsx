import { spaceAPI } from '../api/spaceDevsApi'
import Page from '../components/shared/Page'
import SpacecraftCard from '../components/Spacecraft/SpacecraftCard'

export default function Spacecrafts() {
  return (
    <Page
      title="Spacecrafts"
      listItem={<SpacecraftCard />}
      fetchFunc={spaceAPI.getSpacecrafts!}
      baseLink={`spacecraft`}
      showSearch
      showScrollButton
    />
  )
}

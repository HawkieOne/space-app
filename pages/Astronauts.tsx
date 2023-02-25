import { spaceAPI } from '../api/spaceDevsApi'
import AstronautCard from '../components/Astronaut/AstronautCard'
import Page from '../components/shared/Page'

export default function Astronauts() {

  return (
    <Page
        title="Astronauts"
        listItem={<AstronautCard />}
        fetchFunc={spaceAPI.getAstronauts!}
        baseLink={`astronaut`}
        showSearch
        showScrollButton
    />
  )
}

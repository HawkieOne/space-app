import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import AstronautCard from '../components/Astronaut/AstronautCard'
import Page from '../components/shared/Page'

export default function Astronauts() {

  return (
    <Page
        title="Astronauts"
        listItem={<AstronautCard />}
        fetchFunc={spaceAPI.getAstronauts!}
        baseLink={`${BASE_URL}astronaut`}
        showSearch
    />
  )
}

import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import AgencyCard from '../components/Agency/AgencyCard'
import Page from '../components/shared/Page'

export default function Agencies() {
  return (
    <Page
      title="Agencies"
      listItem={<AgencyCard />}
      fetchFunc={spaceAPI.getAgencies!}
      baseLink={`agencies`}
      showSearch
    />
  )
}

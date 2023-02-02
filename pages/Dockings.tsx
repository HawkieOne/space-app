import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import DockingCard from '../components/Docking/DockingCard'
import Page from '../components/shared/Page'

export default function Dockings() {
  return (
    <Page
      title="Dockings"
      listItem={<DockingCard />}
      fetchFunc={spaceAPI.getDockings!}
      baseLink={`${BASE_URL}docking_event`}
    />
  )
}

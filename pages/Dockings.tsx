import { spaceAPI } from '../api/spaceDevsApi'
import DockingCard from '../components/Docking/DockingCard'
import Page from '../components/shared/Page'

export default function Dockings() {
  return (
    <Page
      title="Dockings"
      listItem={<DockingCard />}
      fetchFunc={spaceAPI.getDockings!}
      baseLink={`docking_event`}
      showSearch
      showScrollButton
    />
  )
}

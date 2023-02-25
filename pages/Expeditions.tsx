import { spaceAPI } from '../api/spaceDevsApi'
import ExpeditionCard from '../components/Expedition/ExpeditionCard'
import Page from '../components/shared/Page'

export default function Expeditions() {
  return (
    <Page
      title="Expeditions"
      listItem={<ExpeditionCard />}
      fetchFunc={spaceAPI.getExpeditions!}
      baseLink={`expedition`}
      showSearch
      showScrollButton
    />
  )
}

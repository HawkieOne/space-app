import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import ExpeditionCard from '../components/Expedition/ExpeditionCard'
import Page from '../components/shared/Page'

export default function Expeditions() {

  return (
    <Page 
    title="Expeditions"
    listItem={<ExpeditionCard />}
    fetchFunc={spaceAPI.getExpeditions!}
    baseLink={`${BASE_URL}expedition`}
/>
  )
}

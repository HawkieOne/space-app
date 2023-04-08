import { spaceAPI } from '../api/spaceDevsApi'
import EventCard from '../components/Event/EventCard'
import Page from '../components/shared/Page'

export default function Events() {
  return (
    <Page
      title="Events"
      listItem={<EventCard />}
      fetchFunc={spaceAPI.getEvents!}
      baseLink={`event/upcoming`}
      showSearch
      showScrollButton
    />
  )
}

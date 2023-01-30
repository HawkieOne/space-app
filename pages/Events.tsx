import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import EventCard from '../components/Event/EventCard'
import CircleLoadingIndicator from '../components/shared/CircleLoadingIndicator'
import ContentModal from '../components/shared/ContentModal'
import SubPage from '../components/shared/SubPage'
import Text from '../components/shared/Text/Text'
import { TextConstants } from '../shared/constants'
import { ApiResponse, Event } from '../shared/interfaces'

export default function Events() {
  const [events, setEvents] = useState<Event[] | null>(null)
  const [nextFetchLink, setNextFetchLink] = useState<string | null>('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchEvents()
    // Double fetching atm, remove one, refactor so this uses fetchEvents()
    spaceAPI?.getEvents!()
      .then((res: ApiResponse) => {
        console.log(res)
        setEvents(res.results)
        if (res.next) {
          setNextFetchLink(res.next)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const fetchEvents = async (link?: string) => {
    await spaceAPI?.getEvents!(link)
      .then((res: ApiResponse) => {
        setEvents((events) => events && [...events, ...res.results])
        setNextFetchLink(res.next)
        console.log(events?.length)
        console.log(res.results.length)
      })
      .catch((error) => {
        setNextFetchLink(null)
        console.log(error)
      })
  }

  return (
    <SubPage
      title="Events"
      onScrollBottom={async () => {
        if (nextFetchLink && !isLoading) {
          setIsLoading(true)
          await fetchEvents(nextFetchLink)
          setIsLoading(false)
        }
      }}
      isLoading={isLoading}
    >
      <>
        {events &&
          events.map((event: Event, index: number) => {
            return <EventCard key={index} event={event} onClick={() => {}} />
          })}
        {events && !nextFetchLink && (
          <Text
            text="All content has been loaded"
            size={TextConstants.small}
            color="text-emerald-700"
          />
        )}
      </>
    </SubPage>
  )
}

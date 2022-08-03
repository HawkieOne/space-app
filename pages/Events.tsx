import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import EventCard from '../components/Event/EventCard'
import ContentModal from '../components/shared/ContentModal'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, Event } from '../shared/interfaces'

export default function Events() {
  const [events, setEvents] = useState<Event[] | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    spaceAPI?.getEvents!()
      .then((res: ApiResponse) => {
        console.log(res)
        setEvents(res.results)
        // if (res.next) {
        //   spaceAPI?.getEvents!(res.next)
        //     .then((res: ApiResponse) => {
        //       setEvents(events =>  events && [...events, res.results]);
        //     })
        //     .catch((error) => {
        //       console.log(error)
        //     })
        // }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Events">
      {events &&
        events.map((event: Event, index: number) => {
          return (
            <EventCard
              key={index}
              event={event}
              onClick={() => setShowModal(true)}
            />
          )
        })}

      {showModal && (
        <ContentModal onOutsideClick={() => setShowModal(false)}>Hello</ContentModal>
      )}
    </SubPage>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListCard from '../components/ListCard'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonListCard from '../components/shared/SkeletonLoader'

export default function Events() {
  const [events, setEvents] = useState<any>(null)
  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false)

  useEffect(() => {
    spaceAPI?.getEvents!()
      .then((events: any) => {
        setEvents(events.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (events != null) {
      setHasFetchedData(true)
    }
  }, [events])

  return (
    <div className="bg-gray-900">
      
      {hasFetchedData == true ? (
        events.map((event: any, index: Number) => {
          return <ListCard key={index} event={event} />
        })
      ) : (
        Array(0,0,0,0).map((element, index) => {
          return <SkeletonListCard key={index} />
        })
      )}
    </div>
  )
}

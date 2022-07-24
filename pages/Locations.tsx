import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import LocationCard from '../components/Location/LocationCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, Location } from '../shared/interfaces'

export default function Locations() {
  const [locations, setLocations] = useState<Location[] | null>(null)


  useEffect(() => {
    spaceAPI?.getLocations!()
      .then((res: ApiResponse) => {
        console.log(res)
        setLocations(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Locations">
      {locations ? (
        locations.map((location : Location, index : number) => (
            <LocationCard key={index} location={location} />
        ))
      ) : (
        <SkeletonCardList />
      )}
    </SubPage>
  )
}

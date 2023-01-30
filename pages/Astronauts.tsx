import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import AstronautCard from '../components/Astronaut/AstronautCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, Astronaut } from '../shared/interfaces'

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState<Astronaut[] | null>(null)

  useEffect(() => {
    spaceAPI?.getAstronauts!()
      .then((res: ApiResponse) => {
        setAstronauts(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Astronauts">
      {astronauts &&
        astronauts.map((astronaut: Astronaut, index) => (
          <AstronautCard key={astronaut.id} astronaut={astronaut} />
        ))}
    </SubPage>
  )
}

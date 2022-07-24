import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import SpacecraftCard from '../components/Spacecraft/SpacecraftCard'
import { Spacecraft } from '../shared/interfaces'

export default function Spacecrafts() {
  const [spacecrafts, setSpacecrafts] = useState<Spacecraft[] | null>(null)

  useEffect(() => {
    spaceAPI?.getSpacecrafts!()
      .then((spacestations: any) => {
        console.log(spacestations)
        setSpacecrafts(spacestations.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Spacecrafts">
      {spacecrafts ? (
        spacecrafts.map((spacecraft : Spacecraft, index) => (
            <SpacecraftCard key={index} spacecraft={spacecraft} />
        ))
      ) : (
        <SkeletonCardList />
      )}
    </SubPage>
  )
}

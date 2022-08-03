import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import ExpeditionCard from '../components/Expedition/ExpeditionCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, Expedition } from '../shared/interfaces'

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState<Expedition[] | null>(null)

  useEffect(() => {
    spaceAPI?.getExpeditions!()
      .then((res: ApiResponse) => {
        console.log(res)
        setExpeditions(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Expeditions">
      {expeditions &&
        expeditions.map((expedition: Expedition, index: number) => (
          <ExpeditionCard key={expedition.id} expedition={expedition} />
        ))}
    </SubPage>
  )
}

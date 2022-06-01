import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonListCard from '../components/shared/SkeletonLoader'

export default function Expeditions() {
  const [expeditions, setExpeditions] = useState<any>(null)

  const [hasFetchedData, setHasFetchedData] = useState<any>(null)

  useEffect(() => {
    spaceAPI?.getExpeditions!()
      .then((spacestations: any) => {
        console.log(spacestations)
        setExpeditions(spacestations.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (expeditions != null) {
      setHasFetchedData(true)
    }
  }, [expeditions])

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true ? (
        <div className="m-6 grid grid-cols-4 gap-6"></div>
      ) : (
        Array(0, 0, 0, 0).map((element, index) => {
          return <SkeletonListCard key={index} />
        })
      )}
    </div>
  )
}

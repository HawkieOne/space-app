import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonListCard from '../components/shared/SkeletonListCard'

export default function Spacecrafts() {
  const [spacecrafts, setSpacecrafts] = useState<any>(null)

  const [hasFetchedData, setHasFetchedData] = useState<any>(null)

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

  useEffect(() => {
    if (spacecrafts != null) {
      setHasFetchedData(true)
    }
  }, [spacecrafts])

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

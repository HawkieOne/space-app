import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import AgencyCard from '../components/AgencyCard'
import SkeletonListCard from '../components/shared/SkeletonLoader'

export default function Agencies() {
  const [agencies, setAgencies] = useState<any>(null)

  const [hasFetchedData, setHasFetchedData] = useState<any>(null)

  useEffect(() => {
    spaceAPI?.getAgencies!()
      .then((agencies: any) => {
        console.log(agencies.results)
        setAgencies(agencies.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (agencies != null) {
      setHasFetchedData(true)
    }
  }, [agencies])

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true
        ? agencies.map((agency: any, index: any) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))
        : Array(0, 0, 0, 0).map((element, index) => {
            return <SkeletonListCard key={index} />
          })}
    </div>
  )
}

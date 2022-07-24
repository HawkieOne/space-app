import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import AgencyCard from '../components/Agency/AgencyCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { Agency, ApiResponse } from '../shared/interfaces'

export default function Agencies() {
  const [agencies, setAgencies] = useState<Agency[] | null>(null)

  useEffect(() => {
    spaceAPI?.getAgencies!()
      .then((res: ApiResponse) => {
        setAgencies(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Agencies">
      {agencies ? (
        agencies.map((agency: Agency, index) => (
          <AgencyCard key={agency.id} agency={agency} />
        ))
      ) : (
        <SkeletonCardList />
      )}
    </SubPage>
  )
}

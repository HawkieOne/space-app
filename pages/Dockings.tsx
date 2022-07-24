import { Key, useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import DockingCard from '../components/Docking/DockingCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, Docking } from '../shared/interfaces'

export default function Dockings() {
  const [dockings, setDockings] = useState<Docking[] | null>(null)

  useEffect(() => {
    spaceAPI?.getDockings!()
      .then((res: ApiResponse) => {
        console.log(res)
        setDockings(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Dockings" >
      {dockings? (
        dockings.map((docking : Docking, index : Key) => (
            <DockingCard docking={docking} key={index}/>
        ))
      ) : (
        <SkeletonCardList />
      )}
    </SubPage>
  )
}

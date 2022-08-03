import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import LaunchVehicleCard from '../components/LaunchVehicle/LaunchVehicleCard'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import { ApiResponse, LaunchVehicle } from '../shared/interfaces'

export default function LaunchVehicles() {
  const [launchVehicles, setLaunchVehicles] = useState<LaunchVehicle[] | null>(
    null
  )

  useEffect(() => {
    spaceAPI?.getLaunchVehicles!()
      .then((res: ApiResponse) => {
        console.log(res)
        setLaunchVehicles(res.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Launch Vehicles">
      {launchVehicles &&
        launchVehicles.map((launchVehicle: LaunchVehicle, index) => (
          <LaunchVehicleCard key={index} launchVehicle={launchVehicle} />
        ))}
    </SubPage>
  )
}

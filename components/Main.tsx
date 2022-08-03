import { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { spaceAPI } from '../api/spaceDevsApi'
import { Launch } from '../shared/interfaces'
import CircleLoadingIndicator from './shared/CircleLoadingIndicator'
import Footer from './shared/Footer'
import MomentTimeCard from './shared/MomentTimeCard'
import SkeletonCard from './shared/skeletons/SkeletonCard'
import SkeletonLaunchCard from './shared/skeletons/SkeletonLaunchCard'
import SkeletonListMain from './shared/skeletons/SkeletonListMain'

export default function Main() {
  const [currentLaunch, setCurrentLaunch] = useState<Launch | null>(null)
  const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[] | null>(
    null
  )
  const [lastPreviousLaunch, setLastPreviousLaunch] = useState<Launch | null>(
    null
  )

  useEffect(() => {
    spaceAPI?.getLaunches!()
      .then((launches: any) => {
        setUpcomingLaunches(launches.results)
        setCurrentLaunch(launches.results[0])
      })
      .catch((error) => {
        console.log(error)
      })

    spaceAPI?.getPreviousLaunches!()
      .then((prevLaunches: any) => {
        setLastPreviousLaunch(prevLaunches.results[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const changeCurrentLaunch = (launch: Launch) => {
    setCurrentLaunch(launch)
  }

  return (
    <div className="h-full w-full">
      {currentLaunch && upcomingLaunches && lastPreviousLaunch ? (
        <div
          className="flex h-full w-full flex-col items-center justify-start space-y-8 bg-gray-900 p-4 
                        xl:space-y-16"
        >
          <div className="flex w-full justify-center gap-8">
            <MomentTimeCard title="NEXT LAUNCH" launch={upcomingLaunches[0]} />
            <MomentTimeCard title="CHOSEN LAUNCH" launch={currentLaunch} />
            <MomentTimeCard
              title="DAYS SINCE LAST LAUNCH"
              launch={lastPreviousLaunch}
              hasLaunchHappened
            />
          </div>

          <div className="flex xl:space-x-12">
            <div
              className="flex h-full flex-col justify-center space-x-4 divide-y 
                          rounded-2xl bg-gray-800 text-white"
            >
              <div className="flex items-center justify-center p-4">
                <img
                  src={currentLaunch.image}
                  alt=""
                  className="h-96 rounded-lg object-cover shadow-2xl"
                />
              </div>
              <div className="flex flex-col items-start justify-around space-y-4 py-4 px-6 xl:text-3xl">
                <p>{currentLaunch.name}</p>
                <p>{currentLaunch.launch_service_provider.name}</p>
                <p>{currentLaunch.pad.location.name}</p>
                <p>{currentLaunch.net}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-800 px-2 py-2 text-white">
              {upcomingLaunches!.map((launch: any, index: number) => (
                <div key={launch.index}>
                  {currentLaunch.id === launch.id ? (
                    <div
                      key={launch.id}
                      className="flex cursor-pointer flex-col space-y-2 rounded-2xl bg-slate-500 p-2"
                    >
                      <p>{launch.name}</p>
                    </div>
                  ) : (
                    <div
                      key={launch.id}
                      className="flex cursor-pointer flex-col space-y-2 rounded-2xl p-2 hover:bg-gray-900 hover:text-red-300"
                      onClick={() => changeCurrentLaunch(launch)}
                    >
                      <p>{launch.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <CircleLoadingIndicator />
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

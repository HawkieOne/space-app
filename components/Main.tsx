import axios from 'axios'
import { useEffect, useState } from 'react'
import DashboardTabber from './DashboardTabber'
import { spaceAPI } from '../api/spaceDevsApi'
import Moment from 'react-moment'
import SkeletonCard from './shared/SkeletonCard'
import SkeletonListMain from './shared/SkeletonListMain'
import SkeletonLaunchCard from './shared/SkeletonLaunchCard'
import InfoCard from './shared/InfoCard'

export default function Main() {
  const [currentLaunch, setCurrentLaunch] = useState<any>(null)
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null)
  const [lastPreviousLaunch, setLastPreviousLaunch] = useState<any>(null)

  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false)

  useEffect(() => {
    spaceAPI?.getLaunches!()
      .then((launches: any) => {
        console.log(launches)
        setUpcomingLaunches(launches.results)
        setCurrentLaunch(launches.results[0])
      })
      .catch((error) => {
        console.log(error)
      })

    spaceAPI?.getPreviousLaunches!()
      .then((prevLaunches: any) => {
        console.log(prevLaunches)
        setLastPreviousLaunch(prevLaunches.results[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (
      currentLaunch != null &&
      ((upcomingLaunches != null) != lastPreviousLaunch) != null
    ) {
      setHasFetchedData(true)
    }
  }, [currentLaunch, upcomingLaunches, lastPreviousLaunch])

  const changeCurrentLaunch = (launch: any) => {
    setCurrentLaunch(launch)
  }

  const today = new Date()

  return (
    <div>
      {hasFetchedData == true ? (
        <div className="flex h-full w-full flex-col items-center justify-start space-y-8 bg-gray-900 p-4">
          <div className="flex w-full max-w-7xl justify-center gap-8">
            {/* <SkeletonCard /> */}

            <InfoCard header="NEXT LAUNCH">
              <p className="text-xl">
                {upcomingLaunches[0].rocket.configuration.full_name}
              </p>
              <Moment format="YYYY-MM-DD HH:SS" className="text-lg">
                {upcomingLaunches[0].net}
              </Moment>
              <div>
                <Moment
                  diff={today}
                  unit="days"
                  className="text-3xl text-emerald-700"
                >
                  {upcomingLaunches[0].net}
                </Moment>
                <span className="ml-1">
                  {upcomingLaunches[0].net === 1 ? 'day' : 'days'} to launch
                </span>
              </div>
            </InfoCard>

            <InfoCard header="CHOSEN LAUNCH">
              <p className="text-xl">
                {currentLaunch.rocket.configuration.full_name}
              </p>
              <Moment format="YYYY-MM-DD HH:SS" className="text-lg">
                {currentLaunch.net}
              </Moment>
              <div>
                <Moment
                  diff={today}
                  unit="days"
                  className="text-3xl text-emerald-700"
                >
                  {currentLaunch.net}
                </Moment>
                <span className="ml-1">
                  {currentLaunch.net === 1 ? 'day' : 'days'} to launch
                </span>
              </div>
            </InfoCard>

            <InfoCard header="DAYS SINCE LAST LAUNCH">
              <p className="text-xl">
                {lastPreviousLaunch?.rocket.configuration.full_name}
              </p>
              <Moment format="YYYY-MM-DD HH:SS" className="text-lg">
                {lastPreviousLaunch?.net}
              </Moment>
              <div>
                <Moment
                  diff={lastPreviousLaunch?.net}
                  unit="days"
                  className="text-3xl text-cyan-700"
                >
                  {today}
                </Moment>
                <span className="ml-1">
                  {lastPreviousLaunch?.net === 1 ? 'day' : 'days'} ago
                </span>
              </div>
            </InfoCard>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className="flex h-full flex-col justify-center space-x-4 rounded-2xl bg-gray-800 text-white">
              <img
                src={currentLaunch.image}
                alt=""
                className="cropped-image rounded-t-2xl"
              />
              <div className="my-4 flex flex-col items-start justify-around space-y-4">
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
            {/* <SkeletonListMain /> */}

            <div className="flex h-full flex-col justify-center space-x-4 rounded-2xl bg-gray-800 text-white">
              <img
                src={currentLaunch.image}
                alt=""
                className="cropped-image rounded-t-2xl"
              />
              <div className="my-4 flex flex-col items-start justify-around space-y-4">
                <p>{currentLaunch.name}</p>
                <p>{currentLaunch.launch_service_provider.name}</p>
                <p>{currentLaunch.pad.location.name}</p>
                <p>{currentLaunch.net}</p>
              </div>
            </div>
            {/* <SkeletonLaunchCard /> */}
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-start space-y-8 bg-gray-900 p-4">
          <div className="flex w-full max-w-7xl justify-center gap-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <div className="grid h-3/5 w-3/5 grid-cols-3 gap-5">
            <SkeletonLaunchCard />
            <SkeletonListMain />
            <SkeletonLaunchCard />
          </div>
        </div>
      )}
    </div>
  )
}

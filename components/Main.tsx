import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import { compareDateToToday } from '../shared/dateMethods'
import { Launch } from '../shared/interfaces'
import Box from './shared/Box'
import RadioGroupLaunchesList from './shared/RadioGroupList'
import SubPage from './shared/SubPage'
import InfoRow from './shared/Text/InfoRow'
import { Tab } from '@headlessui/react'
import MomentTimeCard from './shared/MomentTimeCard'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Main() {
  const [currentLaunch, setCurrentLaunch] = useState<Launch | null>(null)
  const [upcomingLaunches, setUpcomingLaunches] = useState<Launch[] | null>(
    null
  )
  const [previousLaunches, setPreviousLaunches] = useState<Launch[] | null>(
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
        setPreviousLaunches(prevLaunches.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <SubPage title="" initialLoading={!upcomingLaunches && !previousLaunches}>
      {currentLaunch && upcomingLaunches && previousLaunches && (
        // Is the outer div needed?
        <div className="flex w-full bg-gray-900">
          <div className="max-h-2/4 flex w-full gap-5 items-start justify-center">
            <Box
              padding="px-6 py-3"
              spaceY="space-y-4"
              flex="flex items-center"
              styles="flex basis-1/3 flex-col rounded-lg bg-gray-800 text-white h-full"
            >
              <>
                <div className="flex justify-center">
                  <img
                    src={currentLaunch.image}
                    alt="Current launch"
                    className="h-96 rounded-lg shadow-2xl"
                  />
                </div>
                <InfoRow title={'Name'} info={currentLaunch.name} />
                <InfoRow
                  title={'Company'}
                  info={currentLaunch.launch_service_provider.name}
                />
                <InfoRow
                  title={'Type'}
                  info={currentLaunch.launch_service_provider.type}
                />
                <InfoRow
                  title={'Location'}
                  info={currentLaunch.pad.location.name}
                />
                <InfoRow
                  title={'Launch date'}
                  info={new Date(currentLaunch.net).toLocaleString()}
                  infoColor={
                    compareDateToToday(new Date(currentLaunch.net))
                      ? 'text-blue-500'
                      : 'text-red-400'
                  }
                />
              </>
            </Box>

            <div className="h-full basis-1/4 rounded-2xl bg-gray-800 px-2 py-2 text-white">
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                  <Tab
                    key={1}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-spaceTitle focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-spaceTealHover shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    Upcoming
                  </Tab>
                  <Tab
                    key={2}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-spaceTitle focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-spaceTealHover shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    Previous
                  </Tab>
                </Tab.List>
                {currentLaunch && (
                  <Tab.Panels className="mt-2">
                    <Tab.Panel
                      key={3}
                      className={classNames(
                        'rounded-xl p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <RadioGroupLaunchesList
                        values={upcomingLaunches}
                        value={currentLaunch}
                        onChange={(launch) => setCurrentLaunch(launch)}
                      />
                    </Tab.Panel>
                    <Tab.Panel
                      key={4}
                      className={classNames(
                        'rounded-xl p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <RadioGroupLaunchesList
                        values={previousLaunches}
                        value={currentLaunch}
                        onChange={(launch) => setCurrentLaunch(launch)}
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                )}
              </Tab.Group>
            </div>
            <div className="h-full flex basis-1/4 flex-col justify-around rounded-2xl bg-gray-800 p-3">
              <MomentTimeCard
                title="Next launch"
                launch={upcomingLaunches[0]}
              />
              <MomentTimeCard
                title="Next SpaceX launch"
                launch={
                  upcomingLaunches.find((launch) =>
                    launch.launch_service_provider.name.includes('SpaceX')
                  ) || null
                }
              />
              <MomentTimeCard
                title="Next government launch"
                launch={
                  upcomingLaunches.find(
                    (launch) =>
                      launch.launch_service_provider.type === 'Government'
                  ) || null
                }
              />
              <MomentTimeCard
                title="Next commercial launch"
                launch={
                  upcomingLaunches.find(
                    (launch) =>
                      launch.launch_service_provider.type === 'Commercial'
                  ) || null
                }
                hasLaunchHappened={true}
              />
            </div>
          </div>
        </div>
      )}
    </SubPage>
  )
}

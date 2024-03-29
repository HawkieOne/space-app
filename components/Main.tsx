import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import { compareDateToToday } from '../shared/dateMethods'
import { Launch } from '../shared/interfaces'
import Box from './shared/Box'
import Divider from './shared/Divider'
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
    <SubPage title="Launches">
      {currentLaunch && upcomingLaunches && previousLaunches && (
        <div className="flex h-full w-full items-center justify-center bg-gray-900 p-4">
          <div className="max-h-2/4 flex w-full justify-around">
            <Box
              padding="px-6 py-3"
              spaceY="space-y-4"
              flex="flex items-center"
              styles="flex basis-1/3 flex-col rounded-lg bg-gray-800 text-white"
            >
              <>
                <div className="flex justify-center">
                  <img
                    src={currentLaunch.image}
                    alt="Current launch"
                    className="h-96 rounded-lg shadow-2xl"
                  />
                </div>
                <Divider color="bg-spaceLightGrey" opacity={true} />
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

            <div className="basis-1/4 rounded-2xl bg-gray-800 px-2 py-2 text-white">
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
                      startValue={upcomingLaunches[0]}
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
                      startValue={upcomingLaunches[0]}
                      onChange={(launch) => setCurrentLaunch(launch)}
                    />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>

            <div className="basis-1/4 rounded-2xl bg-gray-800 flex flex-col space-y-4 p-3">
              <MomentTimeCard 
                title="Next launch"
                launch={upcomingLaunches[0]}
              />
              <MomentTimeCard 
                title="Previous launch"
                launch={previousLaunches[0]}
                hasLaunchHappened={true}
              />
              <MomentTimeCard 
                title="Next launch"
                launch={upcomingLaunches[0]}
              />
              <MomentTimeCard 
                title="Previous launch"
                launch={previousLaunches[0]}
                hasLaunchHappened={true}
              />              
            </div>
          </div>
        </div>
      )}
    </SubPage>
  )
}

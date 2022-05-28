import axios from "axios";
import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";
import InfoCard from "../components/shared/InfoCard";
export default function Launches() {

  const [currentLaunch, setCurrentLaunch] = useState<any>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  useEffect(() => {
    spaceAPI?.getLaunches!().then((launches: any) => {
      console.log(launches);
      setUpcomingLaunches(launches.results);
      setCurrentLaunch(launches.results[0]);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (currentLaunch != null && upcomingLaunches != null) {
      setHasFetchedData(true);
    }
  }, [currentLaunch, upcomingLaunches]);


  const changeCurrentLaunch = (launch: any) => {
    setCurrentLaunch(launch);
  }

  return (
    <div>
      {hasFetchedData == true ?
        <div className="h-full w-full flex flex-row justify-start items-center space-y-8 bg-gray-900">
          <div className="h-full w-full flex">

            <div className="w-1/6 bg-gray-800 left-0 text-white">
              <div className="w-full text-center">
                <p className="p-2 text-xl">Launches</p>
              </div>
              <div className="py-2 pl-2">
                {upcomingLaunches!.map((launch: any, index: number) => (
                  <div>
                    {
                      currentLaunch.id === launch.id
                        ?
                        <div key={launch.id} className="flex flex-col space-y-2 p-2 bg-slate-500 cursor-pointer">
                          <p>{launch.name}</p>
                        </div>
                        :
                        <div key={launch.id} className="flex flex-col space-y-2 p-2 hover:bg-gray-900 hover:text-red-300 cursor-pointer" onClick={() => changeCurrentLaunch(launch)}>
                          <p>{launch.name}</p>
                        </div>
                    }
                  </div>
                ))}
              </div>
            </div>
            {/* Picture not leftmost, fix layout */}
            <div className="flex justify-between w-full h-full">
              <div className="current-card flex flex-col mx-4 m-4 w-full">
                <div className="h-full flex flex-row gap-4 bg-gray-900">
                  <img src={currentLaunch.image} alt="Rocket image" className="cropped-image" />
                  <div className="flex flex-col items-start space-y-1 my-4 mr-4">
                    <p>
                      <span className="text-gray-500">Name: </span>
                      {currentLaunch.name}
                    </p>
                    <p>
                      <span className="text-gray-500">Company: </span>
                      {currentLaunch.launch_service_provider.name}
                    </p>
                    <p>
                      <span className="text-gray-500">Launch location: </span>
                      {currentLaunch.pad.location.name}
                    </p>
                    <p>
                      <span className="text-gray-500">Launch date: </span>
                      {currentLaunch.net}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row">
                  <InfoCard className='basis-1/4' header='ROCKET'>
                    <p>
                      <span className="text-gray-500">Name: </span>
                      {currentLaunch.rocket.configuration.name}
                    </p>
                  </InfoCard>

                  <InfoCard className='basis-1/4' header='COMPANY'>
                    <p>
                      <span className="text-gray-500">Name: </span>
                      {currentLaunch.launch_service_provider.name}
                    </p>
                    <p>
                      <span className="text-gray-500">Type: </span>
                      {currentLaunch.launch_service_provider.type}
                    </p>
                  </InfoCard>

                  <InfoCard className='basis-1/4' header='MISSION'>
                    <p>
                      <span className="text-gray-500">Name: </span>
                      {currentLaunch.mission?.name ? currentLaunch.mission?.name : 'Not found'}
                    </p>
                    <p>
                      <span className="text-gray-500">Type: </span>
                      {currentLaunch.mission?.type ? currentLaunch.mission?.type : 'Not found'}
                    </p>
                    <p>
                      <span className="text-gray-500">Purpose: </span>
                      {currentLaunch.mission?.description ? currentLaunch.mission?.description : 'Not found'}
                    </p>
                  </InfoCard>

                  <InfoCard className='basis-1/4' header='LAUNCH LOCATION'>
                    <p>
                      <span className="text-gray-500">Name: </span>
                      <a href={currentLaunch.pad.map_url} target='_blank' rel="noreferrer noopener">
                        {currentLaunch.pad.name ? currentLaunch.pad.name : null}
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-500">Location: </span>
                      {currentLaunch.pad.location.name ? currentLaunch.pad.location.name : null}
                    </p>
                    <p>
                      <span className="text-gray-500">Launch count: </span>
                      {currentLaunch.pad.location.name ? currentLaunch.pad.location.total_launch_count : null}
                    </p>
                  </InfoCard>
                </div>
              </div>
            </div>

          </div>
        </div>

        :
        null
      }
    </div>
  )
}


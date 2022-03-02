import axios from "axios";
import { useEffect, useState } from "react";
import { spaceAPI } from "./api/spaceDEvsAPI";
export default function Launches() {

  const [currentLaunch, setCurrentLaunch] = useState<any>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  useEffect(() => {
    spaceAPI?.getLaunches!().then((launches : any) => {
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
  

  const changeCurrentLaunch = (launch : any) => {
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
                  {upcomingLaunches!.map(( launch : any, index : number) => (
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
            <div className="flex justify-between"> 
              <div className="current-card mx-4 m-4">
                <div className="h-full flex flex-row">
                  <img src={currentLaunch.image} alt="Rocket image" className="object-scale-down object-center w-1/3 h-1/2 rounded-t-2xl"/>
                  <div className="flex flex-col items-start space-y-1 my-4">
                    <p>{currentLaunch.name}</p>
                    <p>{currentLaunch.launch_service_provider.name}</p>
                    <p>{currentLaunch.pad.location.name}</p>              
                    <p>{currentLaunch.net}</p>
                  </div>
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


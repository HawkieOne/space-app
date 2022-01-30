import axios from "axios";
import { useEffect, useState } from "react";
import DashboardTabber from "./DashboardTabber";
import InfoCard from "./InfoCard";

export default function Main() {

  const [currentLaunch, setCurrentLaunch] = useState<any>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  useEffect(() => {
    axios.get("https://lldev.thespacedevs.com/2.2.0/launch/upcoming").then((response) => {
      const data = response.data;
      const currentLaunch = data.results[0];
      console.log(data.results);
      setUpcomingLaunches(data.results);
      setCurrentLaunch(currentLaunch);
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
        <div className="h-full w-full flex flex-col justify-start items-center space-y-8 p-4 bg-gray-900">
          <div className="">
            <DashboardTabber />
          </div>

          <div className="w-full flex justify-between items-center max-w-7xl"> 
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>

          <div className="flex justify-between items-center max-w-7xl"> 
            <div className="current-card w-1/2">
              <div className="h-full flex flex-col justify-center space-x-4">
                <img src={currentLaunch.image} alt="" className="object-cover h-full rounded-t-2xl"/>
                <div className="flex flex-col justify-around items-start space-y-4 my-4">
                  <p>{currentLaunch.name}</p>
                  <p>{currentLaunch.launch_service_provider.name}</p>
                  <p>{currentLaunch.pad.location.name}</p>              
                  <p>{currentLaunch.net}</p>
                </div>
              </div>
            </div>

            <div className="current-card w-1/3">
              <div className="px-2 py-2">
                {upcomingLaunches!.map(( launch : any, index : number) => (
                  <div>
                    {
                      currentLaunch.id === launch.id 
                      ?
                      <div key={launch.id} className="flex flex-col space-y-2 p-2 bg-slate-500 cursor-pointer rounded-2xl"> 
                        <p>{launch.name}</p>
                      </div>
                      :
                      <div key={launch.id} className="flex flex-col space-y-2 p-2 hover:bg-gray-900 hover:text-red-300 cursor-pointer rounded-2xl" onClick={() => changeCurrentLaunch(launch)}> 
                        <p>{launch.name}</p>
                      </div>
                    }
                  </div>                  
                ))}
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

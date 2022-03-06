import axios from "axios";
import { useEffect, useState } from "react";
import DashboardTabber from "./DashboardTabber";
import InfoCard from "./InfoCard";
import { spaceAPI } from  "../api/spaceDevsApi";
import Moment from 'react-moment';

export default function Main() {

  const [currentLaunch, setCurrentLaunch] = useState<any>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null);
  const [lastPreviousLaunch, setLastPreviousLaunch] = useState<any>(null);

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
    spaceAPI?.getPreviousLaunches!().then((prevLaunches : any) => {
      console.log(prevLaunches);
      setLastPreviousLaunch(prevLaunches.results[0]);
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

const today = new Date();

  return (
    <div>
      {hasFetchedData == true ?
        <div className="h-full w-full flex flex-col justify-start items-center space-y-8 p-4 bg-gray-900">
          <div className="w-full grid grid-cols-4  gap-4 max-w-7xl"> 

            <div className="info-card px-4 py-1 divide-y divide-white">
                <div className="text-center pt-2 text-red-300">
                    NEXT LAUNCH
                </div>
                <div className="text-center py-4">
                  <Moment format="YYYY-MM-DD HH:SS" className="text-xl">{currentLaunch.net}</Moment>
                </div>
            </div>
     
            <div className="info-card px-4 py-1 divide-y divide-white">
                <div className="text-center pt-2 text-red-300">
                    DAYS UNTIL NEXT LAUNCH
                </div>
                <div className="text-center py-4 flex justify-center items-center">
                  <Moment diff={today} unit="days" className="text-6xl text-emerald-700">{upcomingLaunches[0].net}</Moment>
                  {/* <p className="ml-1">{Moment(today).diff(upcomingLaunches[0].net, 'days') == 1 
                    ? 'DAY'
                    : 'DAYS'
                  }</p> */}
                  <p className="ml-1">DAY</p>
                </div>
            </div>
      
            <div className="info-card px-4 py-1 divide-y divide-white">
                <div className="text-center pt-2 text-red-300">
                    DAYS UNTIL CHOSEN LAUNCH
                </div>
                <div className="text-center py-4 flex justify-center items-center">
                  <Moment diff={new Date().toString()} unit="days" className="text-6xl text-emerald-700">{currentLaunch.net}</Moment><p className="ml-1">DAYS</p>
                </div>
            </div>

            <div className="info-card px-4 py-1 divide-y divide-white">
                <div className="text-center pt-2 text-red-300">
                    DAYS SINCE LAST LAUNCH
                </div>
                <div className="text-center py-4 flex justify-center items-center">
                  <Moment diff='2022-03-02' unit="days" className="text-6xl text-cyan-700">{new Date().toString()}</Moment><p className="ml-1">DAYS</p>
                </div>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-5">

              <div className="current-card">
                <div className="h-full flex flex-col justify-center space-x-4">
                  <img src={currentLaunch.image} alt="" className="cropped-image rounded-t-2xl"/>
                  <div className="flex flex-col justify-around items-start space-y-4 my-4">
                    <p>{currentLaunch.name}</p>
                    <p>{currentLaunch.launch_service_provider.name}</p>
                    <p>{currentLaunch.pad.location.name}</p>              
                    <p>{currentLaunch.net}</p>
                  </div>
                </div>
              </div>

              <div className="current-card">
                <div className="px-2 py-2">
                  {upcomingLaunches!.map(( launch : any, index : number) => (
                    <div key={launch.index}>
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

              
            <div className="current-card">
              <div className="h-full flex flex-col justify-center space-x-4">
                <img src={currentLaunch.image} alt="" className="cropped-image rounded-t-2xl"/>
                <div className="flex flex-col justify-around items-start space-y-4 my-4">
                  <p>{currentLaunch.name}</p>
                  <p>{currentLaunch.launch_service_provider.name}</p>
                  <p>{currentLaunch.pad.location.name}</p>              
                  <p>{currentLaunch.net}</p>
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

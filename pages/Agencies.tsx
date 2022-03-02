import axios from "axios";
import { useEffect, useState } from "react";
import { spaceAPI } from "./api/spaceDEvsAPI";


export default function Agencies() {

  const [currentLaunch, setCurrentLaunch] = useState<any>(null);
  const [upcomingLaunches, setUpcomingLaunches] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<boolean>(false);

  useEffect(() => {
    spaceAPI?.getAgencies!().then((agencies : any) => {
      console.log(agencies);
      // setUpcomingLaunches(launches.results);
      // setCurrentLaunch(launches.results[0]);
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
    </div>
  )
}


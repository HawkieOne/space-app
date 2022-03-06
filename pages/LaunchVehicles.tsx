import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function LaunchVehicles() {

  const [launchVehicles, setLaunchVehicles] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getLaunchVehicles!().then((spacestations : any) => {
      console.log(spacestations);
      setLaunchVehicles(spacestations.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (launchVehicles != null) {
      setHasFetchedData(true);
    }
  }, [launchVehicles]);

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true 
      ?
      <div className="grid grid-cols-4 gap-6 m-6">
       
      </div>
        : null
      }      
    </div>
  )
}


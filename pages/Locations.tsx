import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function Locations() {

  const [locations, setLocations] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getLocations!().then((spacestations : any) => {
      console.log(spacestations);
      setLocations(spacestations.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (locations != null) {
      setHasFetchedData(true);
    }
  }, [locations]);

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


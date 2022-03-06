import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function Dockings() {

  const [dockings, setDockings] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getDockings!().then((spacestations : any) => {
      console.log(spacestations);
      setDockings(spacestations.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (dockings != null) {
      setHasFetchedData(true);
    }
  }, [dockings]);

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


import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function Expeditions() {

  const [expeditions, setExpeditions] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getExpeditions!().then((spacestations : any) => {
      console.log(spacestations);
      setExpeditions(spacestations.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (expeditions != null) {
      setHasFetchedData(true);
    }
  }, [expeditions]);

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


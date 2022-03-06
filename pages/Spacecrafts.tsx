import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function Spacecrafts() {

  const [spacecrafts, setSpacecrafts] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getSpacecrafts!().then((spacestations : any) => {
      console.log(spacestations);
      setSpacecrafts(spacestations.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (spacecrafts != null) {
      setHasFetchedData(true);
    }
  }, [spacecrafts]);

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

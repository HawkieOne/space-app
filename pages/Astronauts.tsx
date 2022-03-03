import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";
import AgencyCard from "../components/AgencyCard";
import AstronautCard from "../components/AstronautCard";


export default function Astronauts() {

  const [astronauts, setAstronauts] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getAstronauts!().then((astronauts : any) => {
      console.log(astronauts);
      setAstronauts(astronauts.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (astronauts != null) {
      setHasFetchedData(true);
    }
  }, [astronauts]);

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true 
      ?
        astronauts.map((astronaut : any, index : any) => (
          <AstronautCard key={astronaut.id} astronaut={astronaut}/>
        ))
        : null
      }      
    </div>
  )
}


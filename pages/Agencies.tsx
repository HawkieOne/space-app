import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";
import AgencyCard from "../components/AgencyCard";


export default function Agencies() {

  const [agencies, setAgencies] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getAgencies!().then((agencies : any) => {
      console.log(agencies.results);
      setAgencies(agencies.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (agencies != null) {
      setHasFetchedData(true);
    }
  }, [agencies]);

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true 
      ?
        agencies.map((agency : any, index : any) => (
          <AgencyCard key={agency.id} agency={agency}/>
        ))
        : null
      }      
    </div>
  )
}


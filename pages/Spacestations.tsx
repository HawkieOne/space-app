import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";


export default function Spacestations() {

  const [spacestations, setSpacestations] = useState<any>(null);

  const [hasFetchedData, setHasFetchedData] = useState<any>(null);

  useEffect(() => {
    spaceAPI?.getSpaceStations!().then((spacestations : any) => {
      console.log(spacestations);
      setSpacestations(spacestations.results);
      if (spacestations.next) {
          console.log("HAS NEXT");
        //   spaceAPI?.getSpaceStations!().then((spacestations : any) => {
        //     console.log("FETCHED NEXT")
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
    //   while (spacestations.next) {
    //       spaceAPI?.getSpaceStations!().then((spacestations : any) => {
    //           setSpacestations(( prevState : any) => {
    //                 [...prevState, spacestations.result]
    //           })
    //       })
    //   }
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  useEffect(() => {
    if (spacestations != null) {
      setHasFetchedData(true);
    }
  }, [spacestations]);

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true 
      ?
      <div className="grid grid-cols-4 gap-6 m-6">
        {spacestations.map((spacestation : any, index : any) => (
            <div>
                <div className="rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer hover:scale-105 hover:border-2 border-orange-600" key={spacestation.id}>
                    <img className="w-full max-h-52 bg-white" src={spacestation.image_url} alt="River"/>
                    <div className="px-4 py-2">
                        <div className="font-bold text-lg mb-2 text-white">{spacestation.name}</div>
                        <p className="text-gray-700 text-base">
                            {/* {spacestation.description} */}
                        </p>
                    </div>
                    <div className="px-4 pt-2 pb-2">
                        {spacestation.deorbited !== null 
                            ? <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">Deorbited</span>      
                            : <span className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">In orbit</span>                     
                        }
                    </div>
                </div>
            </div>
        ))}
      </div>
        : null
      }      
    </div>
  )
}


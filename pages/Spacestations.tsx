import { useEffect, useState } from "react";
import { spaceAPI } from "../api/spaceDevsApi";
import Select from 'react-select';
import { compareOldest, compareNewest, compareAZ, compareZA } from "../shared/sortMethods";
import { customStyles } from "../shared/cssSelect";


const options = [
    { value: 'old', label: 'OIdest first' },
    { value: 'new', label: 'Newest first' },
    { value: 'a-z', label: 'A-Z' },
    { value: 'z-a', label: 'Z-A' },
  ];
  
export default function Spacestations() {

  const [spacestations, setSpacestations] = useState<any>(null);
  const [hasFetchedData, setHasFetchedData] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState(options[0]);


  const onSortMethodChange = (event : any) => {
        setSelectedOption(event.value);
        switch (event.value) {
            case 'old':
                sortSpaceStations(compareOldest);
                break;
            case 'new':
                sortSpaceStations(compareNewest);
                break;
            case 'a-z': 
                sortSpaceStations(compareAZ);
                break;
            case 'z-a':
                sortSpaceStations(compareZA);
                break;
        }
  }

  const sortSpaceStations = ( sortMethod: any ) => {
    const spacestationsCopy = spacestations;
    spacestationsCopy.sort(sortMethod);
    setSpacestations(spacestationsCopy);
  }

  useEffect(() => {
    spaceAPI?.getSpaceStations!().then((spacestations : any) => {
      console.log(spacestations);
      const results = spacestations.results;
      results.sort(compareOldest);
      setSpacestations(results);
      if (spacestations.next) {
          console.log("HAS NEXT");
        //   spaceAPI?.getSpaceStations!().then((spacestations : any) => {
        //     console.log("FETCHED NEXT")
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }
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
      <div className="flex flex-col p-6 space-y-6">
        
        <Select
            className="self-start bg-slate-800 text-red-500"
            classNamePrefix="text-green-500"
            // defaultValue={selectedOption}
            onChange={onSortMethodChange}
            options={options}
            placeholder="Sort by"
            styles={customStyles}
        />

        <div className="grid grid-cols-4 gap-6">
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
      </div>
        : null
      }      
    </div>
  )
}


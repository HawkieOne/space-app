import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonListCard from '../components/shared/SkeletonListCard'
import SkeletonSpacestation from '../components/shared/SkeletonSpacestation'
import Spacestation from '../components/Spacestation'
import { customStyles } from '../shared/cssSelect'
import {
  compareAZ,
  compareNewest,
  compareOldest,
  compareZA,
} from '../shared/sortMethods'

const options = [
  { value: 'old', label: 'OIdest first' },
  { value: 'new', label: 'Newest first' },
  { value: 'a-z', label: 'A-Z' },
  { value: 'z-a', label: 'Z-A' },
]

export default function Spacestations() {
  const [spacestations, setSpacestations] = useState<any>(null)
  const [hasFetchedData, setHasFetchedData] = useState<any>(null)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const onSortMethodChange = (event: any) => {
    setSelectedOption(event.value)
    switch (event.value) {
      case 'old':
        sortSpaceStations(compareOldest)
        break
      case 'new':
        sortSpaceStations(compareNewest)
        break
      case 'a-z':
        sortSpaceStations(compareAZ)
        break
      case 'z-a':
        sortSpaceStations(compareZA)
        break
    }
  }

  const sortSpaceStations = (sortMethod: any) => {
    const spacestationsCopy = spacestations
    spacestationsCopy.sort(sortMethod)
    setSpacestations(spacestationsCopy)
  }

  useEffect(() => {
    spaceAPI?.getSpaceStations!()
      .then((spacestations: any) => {
        console.log(spacestations)
        const results = spacestations.results
        results.sort(compareOldest)
        setSpacestations(results)
        if (spacestations.next) {
          console.log('HAS NEXT')
          //   spaceAPI?.getSpaceStations!().then((spacestations : any) => {
          //     console.log("FETCHED NEXT")
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (spacestations != null) {
      setHasFetchedData(true)
    }
  }, [spacestations])

  return (
    <div className="bg-gray-900">
      {hasFetchedData === true ? (
        <div className="flex flex-col space-y-6 p-6">
          <Select
            className="self-start bg-slate-800 text-red-500"
            classNamePrefix="text-green-500"
            // defaultValue={selectedOption}
            onChange={onSortMethodChange}
            options={options}
            placeholder="Sort by"
            styles={customStyles}
          />

          <motion.div layout className="grid grid-cols-4 gap-6">
            {spacestations.map((spacestation: any, index: any) => (
              <Spacestation
                spacestation={spacestation}
                key={index}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 p-6">
          {Array(0, 0, 0).map((element, index) => {
            return Array(0, 0, 0, 0).map((element, index) => {
              return <SkeletonSpacestation key={index} />
            })
          })}
        </div>
      )}
    </div>
  )
}

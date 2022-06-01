import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { spaceAPI } from '../api/spaceDevsApi'
import SkeletonListCard from '../components/shared/SkeletonLoader'
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
              <AnimatePresence>
                <motion.div
                  layout
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="cursor-pointer overflow-hidden rounded border-orange-600 bg-slate-800 shadow-lg hover:scale-105 hover:border-2"
                  key={spacestation.id}
                >
                  <img
                    className="max-h-52 w-full bg-white"
                    src={spacestation.image_url}
                    alt="River"
                  />
                  <div className="px-4 py-2">
                    <div className="mb-2 text-lg font-bold text-white">
                      {spacestation.name}
                    </div>
                    <p className="text-base text-gray-700">
                      {/* {spacestation.description} */}
                    </p>
                  </div>
                  <div className="px-4 pt-2 pb-2">
                    {spacestation.deorbited !== null ? (
                      <span className="mr-2 mb-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-red-700">
                        Deorbited
                      </span>
                    ) : (
                      <span className="mr-2 mb-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-green-700">
                        In orbit
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </motion.div>
        </div>
      ) : (
        Array(0, 0, 0, 0).map((element, index) => {
          return <SkeletonListCard key={index} />
        })
      )}
    </div>
  )
}

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import CustomSelect from '../components/shared/CustomSelect'
import SubPage from '../components/shared/SubPage'
import SpacestationCard from '../components/Spacestation/SpacestationCard'
import { BASE_URL } from '../api/utilitites/provider'
import {
    optionsSpaceStations,
    SORT_AZ,
    SORT_NEW,
    SORT_OLD,
    SORT_ZA
} from '../shared/data'
import { ApiResponse, SortOption, Spacestation } from '../shared/interfaces'
import {
    compareAZ,
    compareNewest,
    compareOldest,
    compareZA
} from '../shared/sortMethods'

export default function Spacestations() {
  const [spacestations, setSpacestations] = useState<Spacestation[] | null>(
    null
  )

  const onSortMethodChange = (option: SortOption) => {
    switch (option.value) {
      case SORT_OLD:
        console.log('old')
        sortSpaceStations(compareOldest)
        break
      case SORT_NEW:
        console.log('new')
        sortSpaceStations(compareNewest)
        break
      case SORT_AZ:
        console.log('az')
        sortSpaceStations(compareAZ)
        break
      case SORT_ZA:
        console.log('za')
        sortSpaceStations(compareZA)
        break
    }
  }

  const sortSpaceStations = (sortMethod: any) => {
    setSpacestations(spacestations!.sort(sortMethod))
  }

  const sortTest = (a: Spacestation, b: Spacestation) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }

  useEffect(() => {
    spaceAPI?.getSpaceStations!(`${BASE_URL}spacestation`)
      .then((res: ApiResponse) => {
        console.log(res)
        const results = res.results
        results.sort(compareOldest)
        setSpacestations(results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SubPage title="Spacestations" initialLoading={!spacestations}>
      {spacestations && (
        <div className="flex flex-col space-y-6 p-6">
          <CustomSelect
            options={optionsSpaceStations}
            onChange={onSortMethodChange}
            placeholder="Sort by"
          />
          <motion.div layout className="grid grid-cols-4 gap-6">
            {spacestations.map((spacestation: Spacestation, index: number) => (
              <SpacestationCard
                spacestation={spacestation}
                key={index}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      )}
    </SubPage>
  )
}

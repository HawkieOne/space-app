import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import AstronautCard from '../components/AstronautCard'
import SkeletonListCard from '../components/shared/SkeletonListCard'

export default function Astronauts() {
  const [astronauts, setAstronauts] = useState<any>(null)

  const [hasFetchedData, setHasFetchedData] = useState<any>(null)

  useEffect(() => {
    spaceAPI?.getAstronauts!()
      .then((astronauts: any) => {
        console.log(astronauts)
        setAstronauts(astronauts.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (astronauts != null) {
      setHasFetchedData(true)
    }
  }, [astronauts])

  return (
    <motion.div layout className="bg-gray-900">
      {hasFetchedData === true
        ? astronauts.map((astronaut: any, index: any) => (
            <AstronautCard key={astronaut.id} astronaut={astronaut} />
          ))
        : Array(0, 0, 0, 0).map((element, index) => {
            return <SkeletonListCard key={index} />
          })}
    </motion.div>
  )
}

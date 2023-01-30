import { motion } from 'framer-motion'
import { Astronaut } from '../../shared/interfaces'
import Card from '../shared/Card'

type AstronautCard = {
  astronaut: Astronaut
}

export default function AstronautCard({ astronaut }: AstronautCard) {
  return (
    <Card onClick={() => {}} data={{ name: astronaut.name, content: astronaut }} wikipedia={true}>
      {astronaut.profile_image_thumbnail && (
        <img
          className="h-full rounded-l-lg object-cover"
          src={astronaut.profile_image_thumbnail}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {astronaut.date_of_birth}-{astronaut.date_of_death}
            </h3>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {astronaut.nationality}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {astronaut.agency.name}
            </div>
          </div>
          <span className="text-grey-darkest text-5xl">{astronaut.name}</span>
          <div className="mt-4 flex items-center">
            <div className="pr-2 text-xs">
              <i className="fas fa-wifi text-green"></i> {astronaut.bio}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

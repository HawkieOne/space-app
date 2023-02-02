import { motion } from 'framer-motion'
import { Astronaut } from '../../shared/interfaces'
import Card from '../shared/Card'

type AstronautCard = {
  item?: Astronaut
}

export default function AstronautCard({ item }: AstronautCard) {
  return item ?
    <Card onClick={() => {}} data={{ name: item.name, content: item }} wikipedia={true}>
      {item.profile_image_thumbnail && (
        <img
          className="h-full rounded-l-lg object-cover"
          src={item.profile_image_thumbnail}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item.date_of_birth}-{item.date_of_death}
            </h3>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {item.nationality}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {item.agency.name}
            </div>
          </div>
          <span className="text-grey-darkest text-5xl">{item.name}</span>
          <div className="mt-4 flex items-center">
            <div className="pr-2 text-xs">
              <i className="fas fa-wifi text-green"></i> {item.bio}
            </div>
          </div>
        </div>
      </div>
    </Card>
  : <></>
}

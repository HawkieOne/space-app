import { motion } from 'framer-motion'
import InfoColorPill from '../shared/InfoColorPill'
import { Astronaut } from '../../shared/interfaces'
import Card from '../shared/Card'
import bgImage from '../../public/Astronauts.png';

type AstronautCard = {
  item?: Astronaut
}

export default function AstronautCard({ item }: AstronautCard) {
  return item ? (
    <Card
      onClick={() => { }}
      data={{ name: item.name, content: item }}
      wikipedia={true}
      imgSrc={item.profile_image_thumbnail}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col p-4 pb-0">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500">
            {item.date_of_birth}-{item.date_of_death}
          </h3>
        </div>
        <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-x-2 lg:space-y-0">
          <InfoColorPill data={item.nationality} bgColor="bg-yellow-500" />
          <InfoColorPill data={item.agency?.name} bgColor="bg-sky-500" />
        </div>
        <span className="my-1 text-grey-darkest text-2xl">{item.name}</span>
        <div className="flex items-center">
          <div className="pr-2 text-xs">
            <i className="fas fa-wifi text-green"></i> {item.bio}
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

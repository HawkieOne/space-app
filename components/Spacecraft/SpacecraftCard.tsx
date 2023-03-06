import React from 'react'
import { Spacecraft } from '../../shared/interfaces'
import Card from '../shared/Card'
import bgImage from '../../public/Spacecrafts.png';

type SpacecraftProps = {
  item?: Spacecraft
}

export default function SpacecraftCard({ item }: SpacecraftProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.spacecraft_config.name, content: item }}
      wikipedia
      imgSrc={item.spacecraft_config.image_url}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs text-spacePrimary">
              {item.status.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {item.spacecraft_config.agency.name}
            </div>
          </div>
          <span className="text-grey-darkest text-xl xl:text-3xl">{item.name}</span>
          <div className="mt-4 flex items-center">
            <div className="pr-2 text-xs">
              <i className="fas fa-wifi text-green"></i> {item.description}
            </div>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

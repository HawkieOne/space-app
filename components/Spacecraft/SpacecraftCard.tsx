import React from 'react'
import { Spacecraft } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill';
import bgImage from '../../public/Spacecrafts.png';

type SpacecraftProps = {
  item?: Spacecraft
}

export default function SpacecraftCard({ item }: SpacecraftProps) {
  return item ? (
    <Card
      onClick={() => { }}
      data={{ name: item.spacecraft_config.name, content: item }}
      wikipedia
      imgSrc={item.spacecraft_config.image_url}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-2 md:space-y-0">
            <InfoColorPill data={item.status.name} bgColor="bg-yellow-500" />
            <InfoColorPill data={item.spacecraft_config.agency.name} bgColor="bg-sky-500" />
          </div>
          <span className="my-2 text-grey-darkest text-xl xl:text-3xl">{item.name}</span>
          <div className="flex items-center text-sm">
            {item.description}
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

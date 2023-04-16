import React from 'react'
import { Expedition } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill';
import bgImage from '../../public/Expeditions.png';

interface ExpeditionProp {
  item?: Expedition
}

export default function ExpeditionCard({ item }: ExpeditionProp) {
  console.log(item);
  return item ? (
    <Card
      onClick={() => { }}
      data={{ name: item.name, content: item }}
      wikipedia={true}
      imgSrc={item.spacestation.image_url}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item?.name}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {new Date(item?.start).toLocaleString()}
            </h2>
          </div>
          <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-x-2 lg:space-y-0">
            <InfoColorPill data={item?.spacestation.name} bgColor="bg-yellow-500" />
            <InfoColorPill data={item?.spacestation.orbit} bgColor="bg-sky-500" />
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

import React from 'react'
import { LaunchVehicle } from '../../shared/interfaces'
import Card from '../shared/Card'
import NullWrapper from '../shared/NullWrapper'
import InfoColorPill from '../shared/InfoColorPill'
import bgImage from '../../public/LaunchVehicles.png';

type LaunchVehicleCardProps = {
  item?: LaunchVehicle
}

export default function LaunchVehicleCard({ item }: LaunchVehicleCardProps) {
  return item ? (
    <Card
      onClick={() => { }}
      data={{ name: item.launcher_config?.name || '', content: item }}
      wikipedia
      imgSrc={item.image_url}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col p-4 pb-0">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500">
            {item.serial_number}
          </h3>
          <NullWrapper item={item.launcher_config}>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {item.launcher_config?.name}
            </h2>
          </NullWrapper>
        </div>
        <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-2 md:space-y-0">
          <NullWrapper item={item.launcher_config}>
            <InfoColorPill data={item?.launcher_config?.full_name} bgColor="bg-yellow-500" />
            <InfoColorPill data={item?.launcher_config?.variant} bgColor="bg-sky-500" />
          </NullWrapper>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

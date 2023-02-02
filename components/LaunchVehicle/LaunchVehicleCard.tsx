import React from 'react'
import { LaunchVehicle } from '../../shared/interfaces'
import Card from '../shared/Card'
import NullWrapper from '../shared/NullWrapper'

type LaunchVehicleCardProps = {
  item?: LaunchVehicle
}

export default function LaunchVehicleCard({ item }: LaunchVehicleCardProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.launcher_config?.name || "", content: item }}
      wikipedia
    >
      {item.image_url && (
        <img
          className="h-full w-40 rounded-l-lg object-cover"
          src={item.image_url}
          alt="Event image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
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
          <div className="flex space-x-2">
            <NullWrapper item={item.launcher_config}>
              <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
                {item.launcher_config?.full_name}
              </div>
            </NullWrapper>
            <NullWrapper item={item.launcher_config}>
              <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
                {item.launcher_config?.variant}
              </div>
            </NullWrapper>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

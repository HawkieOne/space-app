import React from 'react'
import { Spacecraft } from '../../shared/interfaces'
import Card from '../shared/Card'

type SpacecraftProps = {
  item?: Spacecraft
}

export default function SpacecraftCard({ item }: SpacecraftProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.spacecraft_config.name, content: item }}
      wikipedia
    >
      {item.spacecraft_config.image_url && (
        <img
          className="h-full w-60 rounded-l-lg object-cover"
          src={item.spacecraft_config.image_url}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item.serial_number}
            </h3>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {item.spacecraft_config.agency.abbrev}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {item.spacecraft_config.in_use}
            </div>
          </div>
          <span className="text-grey-darkest text-5xl">{item.name}</span>
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

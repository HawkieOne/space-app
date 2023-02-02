import React from 'react'
import { Expedition } from '../../shared/interfaces'
import Card from '../shared/Card'

interface ExpeditionProp {
  item?: Expedition
}

export default function ExpeditionCard({ item }: ExpeditionProp) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.name, content: item }}
      wikipedia={true}
    >
      {item.spacestation.image_url && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={item.spacestation.image_url}
          alt="Event image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item?.name}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {item?.start}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {item?.spacestation.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {item?.spacestation.orbit}
            </div>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

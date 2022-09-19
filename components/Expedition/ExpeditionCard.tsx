import React from 'react'
import { Expedition } from '../../shared/interfaces'
import Card from '../shared/Card'

interface ExpeditionProp {
  expedition: Expedition
}

export default function ExpeditionCard({ expedition }: ExpeditionProp) {
  return (
    <Card
      onClick={() => {}}
      data={{ name: expedition.name, content: expedition }}
    >
      {expedition.spacestation.image_url && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={expedition.spacestation.image_url}
          alt="Event image"
        />
      )}
      w-128 h-full rounded-l-sm
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {expedition?.name}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {expedition?.start}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {expedition?.spacestation.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {expedition?.spacestation.orbit}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

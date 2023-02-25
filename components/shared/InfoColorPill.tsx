import React from 'react'

type InfoColorPillProps = {
    data: any
    bgColor: string
}

export default function InfoColorPill({ data, bgColor } : InfoColorPillProps) {
  return (
    <div>
      {data && (
        <div className={`desktop:text-md flex items-center rounded-full ${bgColor} px-2 py-1 text-xs`}>
          {data}
        </div>
      )}
    </div>
  )
}

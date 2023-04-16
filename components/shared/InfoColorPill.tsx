import React from 'react'

type InfoColorPillProps = {
    data: any
    bgColor: string
    textColor?: string;
}

export default function InfoColorPill({ data, bgColor, textColor } : InfoColorPillProps) {
  return (
    <div>
      {data && (
        <div className={`desktop:text-md flex items-center rounded-full px-2 py-1 text-xs w-fit 
        ${bgColor} ${textColor ? textColor : "text-black"}`}>
          {data}
        </div>
      )}
    </div>
  )
}

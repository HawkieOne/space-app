import React from 'react'

type DividerProps = {
  height?: string
  color?: string
  opacity?: boolean
}

export default function Divider({ height = 'h-0.5', color, opacity }: DividerProps) {
  return <div className={`${height} ${color} ${opacity && `opacity-20`} w-11/12 `}></div>
}

import React from 'react'

type LargeTextProps = {
  text: string
  uppercase?: boolean
  capitalize?: boolean
  underline?: boolean
}

export default function LargeText({
  text,
  uppercase,
  capitalize,
  underline,
  color
}: LargeTextProps) {
  return (
    <div
      className={`${uppercase} ${capitalize} ${underline} ${color} text-xl`}
    >
      {text}
    </div>
  )
}

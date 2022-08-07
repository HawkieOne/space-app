import React from 'react'

type SmallTextProps = {
  text: string
  uppercase?: boolean
  capitalize?: boolean
  underline?: boolean
  color?: string
}

export default function SmallText({
  text,
  uppercase,
  capitalize,
  underline,
  color,
}: SmallTextProps) {
  return (
    <div
      className={`${uppercase} ${capitalize} ${underline} ${color} text-md`}
    >
      {text}
    </div>
  )
}

import React from 'react'
import { TextConstants } from '../../../shared/constants'

type TextProps = {
  text: string
  size: string
  uppercase?: boolean
  capitalize?: boolean
  underline?: boolean
  color?: string
}

export default function Text({
  text,
  size,
  uppercase,
  capitalize,
  underline,
  color
}: TextProps) {
  return (
    <div
      className={`${uppercase && "uppercase"} ${capitalize && "capitalize"} ${underline && "underline"} ${color && color} 
                  ${size && size}`}
    >
      {text}
    </div>
  )
}

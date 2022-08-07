import React from 'react'
import LargeText from './LargeText'
import SmallText from './SmallText'

type InfoRowProps = {
  title: string
  titleColor?: string
  info: string
  infoColor?: string
}
export default function InfoRow({
  title,
  titleColor,
  info,
  infoColor = 'text-spaceTextInfo',
}: InfoRowProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <LargeText text={title} capitalize={true} />
      <SmallText
        text={info ? info : 'Unknown'}
        capitalize={true}
        color={infoColor}
      />
    </div>
  )
}

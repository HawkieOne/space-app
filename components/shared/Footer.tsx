import React from 'react'
import CodeIcon from './Icons/CodeIcon'
import IconText from './Text/IconText'
import SmallText from './Text/SmallText'

export default function Footer() {
  return (
    <div className="flex h-12 w-full items-center justify-center bg-slate-800 text-white">
      <div className="flex w-1/2 justify-around">
        <SmallText text="SpacQ" />
        <IconText icon={CodeIcon} text="Github" />
        <SmallText text="Sweden 2022" />
      </div>
    </div>
  )
}

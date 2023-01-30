import React from 'react'

type IconTextProps = {
  text: string
  icon: React.FC
}

export default function IconText({ text, icon }: IconTextProps) {
  return (
    <div className={`flex `}>
      {icon}
      <p>{text}</p>
    </div>
  )
}

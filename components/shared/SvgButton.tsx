import React, { SVGProps } from 'react'

type SvgButtonProps = {
    svg: string
    backgroundColor: string,
    color: string,
    alt: string,
}

export default function SvgButton({ svg, backgroundColor, color, alt } : SvgButtonProps) {
  return (
    <div className={`${backgroundColor} ${color} p-2 rounded-lg`}>
        <img src={svg} alt={alt}/>
    </div>
  )
}

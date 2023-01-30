import React from 'react'

type ToolTipProps = {
    children: React.ReactElement
}
export default function Tooltip({ children } : ToolTipProps) {
  return (
    <div className="absolute top-0 -right-28 bg-spacePrimary shadow-md even:text-spacePink">
        {children}
    </div>
  )
}

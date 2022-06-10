import React from 'react'

export default function SkeletonSpacestation() {
  return (
    <div className="cursor-pointer overflow-hidden rounded bg-skeletonLight shadow-lg space-y-4 pb-2">
      <div className="h-52 w-full bg-skeletonDark" />
      <div className="ml-2 h-8 w-32 rounded-full bg-skeletonDark"></div>
      <div className="ml-2 h-6 w-32 rounded-full bg-skeletonDark"></div>
    </div>
  )
}

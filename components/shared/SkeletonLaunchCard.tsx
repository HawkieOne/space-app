import React from 'react'

export default function SkeletonLaunchCard() {
  return (
    <div className="flex h-full flex-col justify-start rounded-2xl bg-skeletonLight animate-pulse">
      <div className="w-full h-64 bg-skeletonDark"></div>
      <div className="my-4 flex flex-col items-start justify-around space-y-4 px-2">
        <div className="h-8 w-full bg-skeletonDark rounded-full"></div>
        <div className="h-8 w-full bg-skeletonDark rounded-full"></div>
        <div className="h-8 w-full bg-skeletonDark rounded-full"></div>
        <div className="h-8 w-full bg-skeletonDark rounded-full"></div>
      </div>
    </div>
  )
}

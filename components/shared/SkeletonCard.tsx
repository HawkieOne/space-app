import React from 'react'

export default function SkeletonCard() {
  return (
    <div
      className="w-1/8 flex flex-col justify-center
                    space-y-2 divide-y divide-white rounded-lg bg-skeletonLight px-6 py-1 animate-pulse"
    >
      <div className="h-1/6 w-full rounded-full bg-skeletonDark"></div>
      <div className="flex flex-col space-y-2 py-2">
        <div className="h-6 w-full rounded-full bg-skeletonDark"></div>
        <div className="h-6 w-full rounded-full bg-skeletonDark"></div>
        <div className="flex space-x-2">
          <div className="h-6 w-12 rounded-full bg-skeletonDark"></div>
          <div className="h-6 w-12 rounded-full bg-skeletonDark"></div>
        </div>
      </div>
    </div>
  )
}

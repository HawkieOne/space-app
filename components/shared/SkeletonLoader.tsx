import React from 'react'

export default function SkeletonListCard() {
  return (
    <div className="m-8 flex flex-col items-center justify-center animate-pulse">
      <div className="card flex h-60 w-3/4 rounded bg-skeletonLight shadow-md">
        <div className="h-full w-64 rounded-l-sm bg-skeletonDark" />
        <div className="flex h-48 w-full flex-col ">
          <div className="flex-1 p-4 pb-0 space-y-4">
            <div className="flex space-x-2">
              <h3 className="h-4 w-36 rounded-full bg-skeletonDark py-1"></h3>
              <h2 className="h-4 w-24 rounded-full bg-skeletonDark px-2 py-1"></h2>
            </div>
            <div className="flex space-x-2">
              <div className="h-6 w-48 rounded-full bg-skeletonDark px-2 py-1"></div>
              <div className="h-6 w-48 rounded-full bg-skeletonDark px-2 py-1"></div>
              <div className="h-6 w-48 rounded-full bg-skeletonDark px-2 py-1"></div>
            </div>
            <div className="h-6 w-1/3 rounded-full bg-skeletonDark px-2 py-1"></div>
            <div className="h-6 w-1/2 rounded-full bg-skeletonDark px-2 py-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

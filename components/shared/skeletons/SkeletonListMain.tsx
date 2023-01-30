import React from 'react'

export default function SkeletonListMain() {
  return (
    <div className="space-y-2 rounded-2xl bg-skeletonLight px-2 py-2 animate-pulse">
      {Array.from(Array(6).keys()).map((el: any, index: number) => (
        <div
          key={index}
          className="flex h-8 w-full rounded-full bg-skeletonDark p-2"
        ></div>
      ))}
    </div>
  )
}

import React from 'react'
import SkeletonListCard from './SkeletonListCard'

export default function SkeletonCardList() {
  return (
    <>
      {Array(0, 0, 0, 0).map((_, index) => {
        return <SkeletonListCard key={index} />
      })}
    </>
  )
}

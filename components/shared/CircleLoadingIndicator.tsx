import React from 'react'
import { BsStars } from 'react-icons/bs'
import { IoMdPlanet } from 'react-icons/io'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function CircleLoadingIndicator() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center 
                    space-y-8 text-spacePink"
    >
      <div className="w-1/6 p-4 text-md flex animation-spin justify-between items-center space-x-6 
                        text-xl xl:text-lg">
        <BsStars size="3em" className="text-yellow-500" />
        <BsStars size="3em" className="text-yellow-500" />
      </div>
        <IoMdPlanet size="4em" className='text-spaceTitle absolute -rotate-45'/>
    </div>
  )
}

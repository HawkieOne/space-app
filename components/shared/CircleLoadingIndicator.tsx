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
      <div className="xl:text- text-md flex animation-spin items-center space-x-6 text-xl xl:text-lg">
        <BsStars size="3em" className="text-yellow-500" />
        <IoMdPlanet size="4em" className='text-spaceTitle'/>
        <BsStars size="3em" className="text-yellow-500" />
      </div>
    </div>
  )
}

import React from 'react'
import { BsStars } from 'react-icons/bs'
import { IoMdPlanet } from 'react-icons/io'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import planet from "../../images/planet.webp";

export default function CircleLoadingIndicator() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center 
                    space-y-8 text-spacePink"
    >
      <div className="w-1/6 p-10 text-md flex animation-spin justify-between items-center space-x-6 
                        text-xl xl:text-lg">
        <div className="h-12 w-12 rotate-[120deg]">
          <img src="comet.webp" alt="comet"></img>
        </div>
        <div className="h-12 w-12 -rotate-[60deg]">
          <img src="comet.webp" alt="comet"></img>
        </div>
      </div>
      <div className="absolute h-16 w-16">
        <img src="planet.webp" alt="planet"></img>
      </div>
    </div>
  )
}

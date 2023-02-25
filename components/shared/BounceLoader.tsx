import { IoMdPlanet } from 'react-icons/io'

export default function BounceLoader() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center 
                    space-y-8 text-spacePink"
    >
      <IoMdPlanet size="3em" className="animate-bounce text-spaceTitle" />
    </div>
  )
}

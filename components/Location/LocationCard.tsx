import { Location } from '../../shared/interfaces'
import Card from '../shared/Card'

interface LocationProp {
  location: Location
}
export default function LocationCard({ location }: LocationProp) {
  return (
    <Card onClick={() => {}}>
      {location.map_image && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={location.map_image}
          alt="Event image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {location.total_landing_count}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {location.total_launch_count}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {location.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {location.country_code}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

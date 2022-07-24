import { Docking } from '../../shared/interfaces'
import Card from '../shared/Card'

interface DockingProp {
  docking: Docking
}
export default function DockingCard({ docking }: DockingProp) {
  return (
    <Card onClick={() => {}}>
      {docking.flight_vehicle.destination && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={docking.flight_vehicle.spacecraft.spacecraft_config.image_url}
          alt="Event image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {docking?.departure}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {docking?.docking}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {docking?.docking_location.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {docking?.docking_location.spacestation.name}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

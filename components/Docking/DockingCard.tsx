import { Docking } from '../../shared/interfaces'
import Card from '../shared/Card'

interface DockingProp {
  item?: Docking
}
export default function DockingCard({ item }: DockingProp) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.docking_location.name || '', content: item }}
      wikipedia={false}
    >
      {item.flight_vehicle.destination && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={item.flight_vehicle.spacecraft.spacecraft_config.image_url}
          alt="Event image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item?.departure}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {item?.docking}
            </h2>
          </div>
          <div className="flex space-x-2">
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {item?.docking_location.name}
            </div>
            <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
              {item?.docking_location.spacestation.name}
            </div>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

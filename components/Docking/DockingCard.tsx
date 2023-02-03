import { Docking } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'
import Text from '../shared/Text/Text'
import { TextConstants } from '../../shared/constants'

interface DockingProp {
  item?: Docking
}
export default function DockingCard({ item }: DockingProp) {
  return item ? (
    <Card
      onClick={() => { }}
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
              {item?.flight_vehicle.spacecraft.spacecraft_config.name}
            </h3>
          </div>
          <div className="flex space-x-2">
            <InfoColorPill
              data={"Destination: " + item?.docking_location.spacestation.name}
              bgColor="bg-lime-500"
            />
            <InfoColorPill
              data={"Docking: " + new Date(item?.docking).toLocaleString()}
              bgColor="bg-yellow-500"
            />
            <InfoColorPill
              data={"Departure: " + new Date(item?.departure).toLocaleString()}
              bgColor="bg-sky-500"
            />
          </div>
          <span className="text-grey-darkest text-3xl desktop:text-4xl">
            {item?.flight_vehicle.spacecraft.name}
          </span>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

import { Event } from '../../shared/interfaces'
import Card from '../shared/Card'
import DownloadButton from '../shared/DownloadButton'
import ExportBox from '../shared/ExportBox'
import MenuCard from '../shared/MenuCard'
import ShareButton from '../shared/ShareButton'

type EventCardProps = {
  event: Event
  onClick: () => void
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card onClick={onClick}>
      <img
        className="h-full w-80 self-center rounded-lg object-cover shadow-2xl xl:w-96"
        src={event?.feature_image}
        alt="Event image"
      />
      <div className="flex w-full flex-col justify-around space-y-2">
        <div className="flex items-baseline space-x-2">
          <h3 className="text-md mb-1 font-light uppercase text-teal-500 desktop:text-xl">
            {event?.type.name}
          </h3>
          <h2 className="text-md mb-1 font-light uppercase text-fuchsia-500 desktop:text-xl">
            {new Date(event?.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex space-x-2">
          {event?.location && (
            <div className="desktop:text-md flex items-center rounded-full bg-yellow-500 px-2 py-1 text-sm">
              {event?.location}
            </div>
          )}
          {event?.launches[0]?.launch_service_provider.name && (
            <div className="desktop:text-md flex items-center rounded-full bg-sky-500 px-2 py-1 text-sm">
              {event?.launches[0]?.launch_service_provider.name}
            </div>
          )}
          {event?.launches[0]?.name && (
            <div className="text-md desktop:text-md flex items-center rounded-full bg-lime-500 px-2 py-1">
              {event?.launches[0]?.name}
            </div>
          )}
        </div>
        <span className="text-grey-darkest text-3xl desktop:text-4xl">
          {event?.name}
        </span>
        <div className="flex items-center">
          <div className="xl:text-md pr-2 text-xs">{event?.description}</div>
        </div>
        <ExportBox fileName={event.name} data={event} />
      </div>
    </Card>
  )
}

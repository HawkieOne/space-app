import { TextConstants } from '../../shared/constants'
import { Event } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'
import NullWrapper from '../shared/NullWrapper'
import Text from '../shared/Text/Text'

type EventCardProps = {
  event: Event
  onClick: () => void
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card onClick={onClick} data={{ name: event.name, content: event }} wikipedia={false}>
      <img
        className="h-full w-80 self-center rounded-lg object-cover shadow-2xl xl:w-96"
        src={event?.feature_image}
        alt="Event image"
      />
      <div className="flex w-full flex-col justify-around space-y-2">
        <div className="flex items-baseline space-x-2">
          <NullWrapper item={event.type}>
            <h3 className="text-md mb-1 font-light uppercase text-teal-500 desktop:text-xl">
              {event?.type.name}
            </h3>
          </NullWrapper>
          <h2 className="text-md mb-1 font-light uppercase text-fuchsia-500 desktop:text-xl">
            {new Date(event?.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex space-x-2">
          <InfoColorPill data={event?.location} bgColor="bg-yellow-500" />
          <InfoColorPill
            data={event?.launches[0]?.launch_service_provider.name}
            bgColor="bg-sky-500"
          />
          <InfoColorPill
            data={event?.launches[0]?.name}
            bgColor="bg-lime-500"
          />
        </div>
        <span className="text-grey-darkest text-3xl desktop:text-4xl">
          {event?.name}
        </span>
        <div className="flex w-3/4 items-center pr-2">
          <Text text={event?.description} size={TextConstants.small} />
        </div>
      </div>
    </Card>
  )
}

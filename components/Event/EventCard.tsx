import { TextConstants } from '../../shared/constants'
import { Event } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'
import NullWrapper from '../shared/NullWrapper'
import Text from '../shared/Text/Text'

interface EventCardProps {
  item?: Event
}

export default function EventCard({ item }: EventCardProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.name, content: item }}
      wikipedia={false}
    >
      <img
        className="h-full w-80 self-center rounded-lg object-cover shadow-2xl xl:w-96"
        src={item?.feature_image}
        alt="Event image"
      />
      <div className="flex w-full flex-col justify-around space-y-2">
        <div className="flex items-baseline space-x-2">
          <NullWrapper item={item.type}>
            <h3 className="text-md mb-1 font-light uppercase text-teal-500 desktop:text-xl">
              {item?.type.name}
            </h3>
          </NullWrapper>
          <h2 className="text-md mb-1 font-light uppercase text-fuchsia-500 desktop:text-xl">
            {new Date(item?.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex space-x-2">
          <InfoColorPill data={item?.location} bgColor="bg-yellow-500" />
          <InfoColorPill
            data={item?.launches[0]?.launch_service_provider.name}
            bgColor="bg-sky-500"
          />
          <InfoColorPill
            data={item?.launches[0]?.name}
            bgColor="bg-lime-500"
          />
        </div>
        <span className="text-grey-darkest text-3xl desktop:text-4xl">
          {item?.name}
        </span>
        <div className="flex w-3/4 items-center pr-2">
          <Text text={item?.description} size={TextConstants.small} />
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

import { TextConstants } from '../../shared/constants'
import { Event } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'
import NullWrapper from '../shared/NullWrapper'
import Text from '../shared/Text/Text'
import bgImage from '../../public/Events.png';

interface EventCardProps {
  item?: Event
}

export default function EventCard({ item }: EventCardProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.name, content: item }}
      wikipedia={false}
      imgSrc={item?.feature_image}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col justify-around space-y-2 p-4 pb-0">
        <div className="flex items-baseline space-x-2">
          <NullWrapper item={item.type}>
            <h3 className="text-md mb-1 font-light uppercase text-teal-500">
              {item?.type.name}
            </h3>
          </NullWrapper>
          <h2 className="text-md mb-1 font-light uppercase text-fuchsia-500">
            {new Date(item?.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-x-2 lg:space-y-0">
          <InfoColorPill
            data={item?.launches[0]?.launch_service_provider.name}
            bgColor="bg-sky-500"
          />
          <InfoColorPill 
            data={item?.location} 
            bgColor="bg-yellow-500" 
          />
          <InfoColorPill 
            data={item?.launches[0]?.name} 
            bgColor="bg-lime-500"
          />
        </div>
        <span className="text-grey-darkest text-xl desktop:text-2xl">
          {item?.name}
        </span>
        <div className="flex md:w-3/4 items-center pr-2">
          <Text text={item?.description} size={TextConstants.tiny} />
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

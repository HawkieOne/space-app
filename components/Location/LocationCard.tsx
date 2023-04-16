import { Location } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill';
import bgImage from '../../public/Locations.png';

interface LocationProp {
  item?: Location
}
export default function LocationCard({ item }: LocationProp) {
  return item ? (
    <Card
      onClick={() => { }}
      data={{ name: item.name.split(',')[0], content: item }}
      wikipedia
      locationId={item.id}
      imgSrc={item.map_image}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex flex-col space-y-2 space-x-0 md:flex-row md:space-x-2 md:space-y-0">
            <InfoColorPill
              data={"Landings: " + item.total_landing_count}
              bgColor="bg-yellow-500"
            />
            <InfoColorPill
              data={"Launches: " + item.total_launch_count}
              bgColor="bg-sky-500"
            />
          </div>
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {item.name.split(',')[0]}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {item.name.split(',').length > 1
                ? item.name.split(',')[1]
                : item.country_code}
            </h2>
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

import { Agency } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'
import bgImage from '../../public/Agencies.png';

type AgencyCardProps = {
  item?: Agency
}

export default function AgencyCard({ item }: AgencyCardProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.name, content: item }}
      wikipedia={true}
      imgSrc={item.image_url}
      bgImg={bgImage.src}
    >
      <div className="flex w-full flex-col justify-around space-y-2 p-4 pb-0">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500">
            {item.abbrev}
          </h3>
          <h2 className="mb-1 font-light uppercase text-fuchsia-500">
            {item?.founding_year}
          </h2>
        </div>
        <div className="flex flex-col space-y-2 space-x-0 lg:flex-row lg:space-x-2 lg:space-y-0">
          {/* <InfoColorPill data={item.country_code} bgColor="bg-yellow-500" /> */}
          <InfoColorPill data={item.type} bgColor="bg-lime-500" />
          <InfoColorPill data={item.spacecraft} bgColor="bg-sky-500" />
        </div>
        <span className="text-2xl text-spaceText">{item.name}</span>
        <div className="mt-4 flex items-center">
          <div className="xl:text-md md:w-3/4 pr-2 text-xs">
            {item.description}
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

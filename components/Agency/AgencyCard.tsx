import { Agency } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'

type AgencyCardProps = {
  item?: Agency
}

export default function AgencyCard({ item }: AgencyCardProps) {
  return item ? (
    <Card
      onClick={() => {}}
      data={{ name: item.name, content: item }}
      wikipedia={true}
    >
      {item.image_url && (
        <img
          className="h-full w-80 self-center rounded-lg object-cover shadow-2xl xl:w-96"
          src={item.image_url}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col justify-around space-y-2">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500">
            {item.abbrev}
          </h3>
          <h2 className="mb-1 font-light uppercase text-fuchsia-500">
            {item?.founding_year}
          </h2>
        </div>
        <div className="flex space-x-2">
          <InfoColorPill data={item.country_code} bgColor="bg-yellow-500" />
          <InfoColorPill data={item.spacecraft} bgColor="bg-sky-500" />
          <InfoColorPill data={item.type} bgColor="bg-lime-500" />
        </div>
        <span className="text-5xl text-spaceText">{item.name}</span>
        <div className="mt-4 flex items-center">
          <div className="xl:text-md w-3/4 pr-2 text-xs">
            {item.description}
          </div>
        </div>
      </div>
    </Card>
  ) : (
    <></>
  )
}

import { Agency } from '../../shared/interfaces'
import Card from '../shared/Card'
import InfoColorPill from '../shared/InfoColorPill'

type AgencyCardProps = {
  agency: Agency
}

export default function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <Card onClick={() => {}} data={{ name: agency.name, content: agency }} wikipedia={true}>
      {agency.image_url && (
        <img
          className="h-full w-80 self-center rounded-lg object-cover shadow-2xl xl:w-96"
          src={agency.image_url}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col justify-around space-y-2">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500">
            {agency.abbrev}
          </h3>
          <h2 className="mb-1 font-light uppercase text-fuchsia-500">
            {agency?.founding_year}
          </h2>
        </div>
        <div className="flex space-x-2">
          <InfoColorPill data={agency.country_code} bgColor="bg-yellow-500" />
          <InfoColorPill data={agency.spacecraft} bgColor="bg-sky-500" />
          <InfoColorPill data={agency.type} bgColor="bg-lime-500" />
        </div>
        <span className="text-5xl text-spaceText">{agency.name}</span>
        <div className="mt-4 flex items-center">
          <div className="xl:text-md pr-2 text-xs w-3/4">{agency.description}</div>
        </div>
      </div>
    </Card>
  )
}

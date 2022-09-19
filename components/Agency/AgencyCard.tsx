import { Agency } from '../../shared/interfaces'
import Card from '../shared/Card'

type AgencyCardProps = {
  agency: Agency
}

export default function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <Card onClick={() => {}} data={{ name: agency.name, content: agency }}>
      {agency.image_url && (
        <img
          className="h-full w-80 rounded-l-lg object-cover"
          src={agency.image_url}
          alt="Agency image"
        />
      )}
      <div className="flex w-full flex-col">
        <div className="flex-1 p-4 pb-0">
          <div className="flex space-x-2">
            <h3 className="mb-1 font-light uppercase text-teal-500">
              {agency.abbrev}
            </h3>
            <h2 className="mb-1 font-light uppercase text-fuchsia-500">
              {agency?.founding_year}
            </h2>
          </div>
          <div className="flex space-x-2">
            {agency.country_code && (
              <div className="desktop:text-md flex items-center rounded-full bg-sky-500 px-2 py-1 text-sm">
                {agency.country_code}
              </div>
            )}
            {agency.spacecraft && (
              <div className="desktop:text-md flex items-center rounded-full bg-sky-500 px-2 py-1 text-sm">
                {agency.spacecraft}
              </div>
            )}
            {agency.type && (
              <div className="text-md desktop:text-md flex items-center rounded-full bg-lime-500 px-2 py-1">
                {agency.type}
              </div>
            )}
          </div>
          <span className="text-5xl text-spaceText">{agency.name}</span>
          <div className="mt-4 flex items-center">
            <div className="xl:text-md pr-2 text-xs">{agency.description}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

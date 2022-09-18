import { Agency } from '../../shared/interfaces'
import Card from '../shared/Card'
import ExportBox from '../shared/ExportBox'

type AgencyCardProps = {
  agency: Agency
}

export default function AgencyCard({ agency }: AgencyCardProps) {
  return (
    <Card onClick={() => {}}>
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
            <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
              {agency.country_code}
            </div>
          </div>
          <span className="text-5xl text-spaceText">{agency.name}</span>
          <div className="mt-4 flex items-center">
            <div className="pr-2 text-xs text-spaceText">
              <i className="fas fa-wifi text-green"></i> {agency.type}
            </div>
          </div>
        </div>
        <ExportBox fileName={agency.name} data={agency} />
      </div>
    </Card>
  )
}

import { DownloadObject } from '../../shared/interfaces'
import ExportBox from './ExportBox'

type CardProps = {
  children: React.ReactNode
  onClick: () => void
  data: DownloadObject
  wikipedia: boolean
  imgSrc: string | undefined
  bgImg: string
  locationId?: Number;
}

export default function Card({
  children,
  onClick,
  data,
  wikipedia,
  imgSrc,
  bgImg,
  locationId
}: CardProps) {
  return (
    <div
      className="relative w-11/12 lg:w-3/4 md:grid grid-cols-7
                 rounded bg-spacePrimary px-2 py-4 text-spaceText shadow-md"
      onClick={onClick}
    >
      <div className="col-start-1 col-end-2 flex items-center justify-center">
        <picture>
          <source srcSet={imgSrc} />
          <img
            src={bgImg}
            className="max-h-32 rounded-l-lg object-cover"
          />
        </picture>
      </div>
      <div className="col-start-2 col-end-7">{children}</div>
      <div className="absolute top-3 right-3">
        <ExportBox fileName={data.name} data={data} wikipedia={wikipedia} locationId={locationId} />
      </div>
    </div>
  )
}

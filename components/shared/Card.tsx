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

const imgLink = "https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";
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
      className="relative grid w-3/4 grid-cols-7
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

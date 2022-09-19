import { DownloadObject } from "../../shared/interfaces"
import ExportBox from "./ExportBox"

type CardProps = {
  children: React.ReactNode
  onClick: () => void
  data: DownloadObject
}

export default function Card({ children, onClick, data }: CardProps) {
  return (
    <div
      className="flex w-3/4 space-x-4 relative
                 rounded bg-spacePrimary p-4 text-spaceText shadow-md"
      onClick={onClick}
    >
      {children}
      <div className="absolute top-3 right-3">
        <ExportBox fileName={data.name} data={data} />
      </div>
    </div>
  )
}

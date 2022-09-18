import React from 'react'
import DownloadButton from './DownloadButton'
import MenuCard from './MenuCard'
import ShareButton from './ShareButton'

type ExportBoxProps = {
  fileName: string
  data: any
}
export default function ExportBox({ fileName, data }: ExportBoxProps) {
  return (
    <div className="flex justify-start space-x-4">
      <DownloadButton data={data} fileName={fileName} fileType="json" />
      <ShareButton data={data}>
        <div>
          <MenuCard onClick={() => {}}>Messenger</MenuCard>
          <MenuCard onClick={() => {}}>Messenger</MenuCard>
        </div>
      </ShareButton>
    </div>
  )
}

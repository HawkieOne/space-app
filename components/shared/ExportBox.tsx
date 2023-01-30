import React from 'react'
import { DownloadObject } from '../../shared/interfaces'
import DownloadButton from './DownloadButton'
import WikipediaButton from './WikipediaButton'
import MenuCard from './MenuCard'
import ShareButton from './ShareButton'

type ExportBoxProps = {
  fileName: string
  data: DownloadObject
}
export default function ExportBox({ fileName, data }: ExportBoxProps) {
  return (
    <div className="flex justify-start space-x-4">
      <DownloadButton data={data.content} fileName={fileName} fileType="json" />
      <WikipediaButton name={fileName} />
      <ShareButton data={data.content}>
        <div>
          <MenuCard onClick={() => {}}>Messenger</MenuCard>
          <MenuCard onClick={() => {}}>Messenger</MenuCard>
        </div>
      </ShareButton>
    </div>
  )
}

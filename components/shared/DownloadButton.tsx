import React from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'
import { MdFileDownload } from 'react-icons/md'

type DownloadButtonProps = {
  onClick?: () => void
  data: any
  fileType: 'json' | 'xml'
  fileName: string
}

export default function DownloadButton({
  onClick,
  data,
  fileType,
  fileName,
}: DownloadButtonProps) {
  return (
    <IconButton
      onClick={() => {
        onClick && onClick()
        const file = JSON.stringify(data)
        fileDownload(file, `${fileName}.${fileType}`)
      }}
    >
      <MdFileDownload size="1.8em" />
    </IconButton>
  )
}

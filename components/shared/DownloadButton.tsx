import React from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'

type DownloadButtonProps = {
  onClick?: () => void
  data: any
  fileType: 'json' | 'txt' | 'xml'
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
        if (fileType === 'json') {
          const fileJSON = JSON.stringify(data)
          fileDownload(fileJSON, `${fileName}.${fileType}`)
        } else if (fileType === 'txt') {
          fileDownload(data.toString(), `${fileName}.${fileType}`)
        } else if (fileType === 'xml') {
          const fileXML = JSON.stringify(data)
          fileDownload(fileXML, `${fileName}.${fileType}`)
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </IconButton>
  )
}

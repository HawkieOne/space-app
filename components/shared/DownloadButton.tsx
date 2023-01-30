import React from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
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

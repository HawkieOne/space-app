import React, { useState } from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'
import ToolTip from './ToolTip'

type ShareButtonProps = {
  onClick?: () => void
  data: any
  children: React.ReactElement
}

export default function ShareButton({
  onClick,
  data,
  children,
}: ShareButtonProps) {
    const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="relative">
      <IconButton
        onClick={() => {
          onClick && onClick();
          setShowTooltip(!showTooltip);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </IconButton>
      {showTooltip && (
        <ToolTip>
            {children}
        </ToolTip>
      )}
    </div>
  )
}

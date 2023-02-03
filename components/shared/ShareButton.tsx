import React, { useState } from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'
import ToolTip from './ToolTip'
import { AiOutlineShareAlt } from 'react-icons/ai'

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
       <AiOutlineShareAlt size="1.8em" />
      </IconButton>
      {showTooltip && (
        <ToolTip>
            {children}
        </ToolTip>
      )}
    </div>
  )
}

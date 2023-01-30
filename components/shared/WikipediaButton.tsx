import React from 'react'
import fileDownload from 'js-file-download'
import IconButton from './IconButton'
import { FaWikipediaW } from 'react-icons/fa'

type WikipediaButtonProps = {
  onClick?: () => void
  name: string
}

export default function WikipediaButton ({
  onClick,
  name,
}: WikipediaButtonProps) {
  return (
    <IconButton
      onClick={() => {
        if(window) {
          window.open("https://www.wikipedia.com/wiki/" + name.split(' ').join('_'), '_blank');
      }}}
    >
      <FaWikipediaW size={28}/>
    </IconButton>
  )
}

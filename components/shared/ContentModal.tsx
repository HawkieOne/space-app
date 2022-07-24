import React from 'react';
import SvgButton from './SvgButton';

type ContentModalProps = {
  onOutsideClick: () => void
  children: React.ReactNode
}

export default function ContentModal({
  onOutsideClick,
  children,
}: ContentModalProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-gray-900 p-5 opacity-75"
      onClick={onOutsideClick}
    >
      <div className="relative flex h-1/2 w-1/2 flex-col rounded-3xl bg-spacePrimary opacity-100">
        {children}
        <div className="flex justify-around">
          <SvgButton
            svg="../../svg/download.svg"
            backgroundColor="bg-spaceTitle"
            color="bg-spacepink"
            alt="Download as json"
          />
          <SvgButton
            svg="../../svg/print.svg"
            backgroundColor="bg-spaceTitle"
            color="bg-spacepink"
            alt="Print"
          />
        </div>
        <div className="absolute top-0 right-0 p-2 text-spacepink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

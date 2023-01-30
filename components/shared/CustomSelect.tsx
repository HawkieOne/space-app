import React, { useState } from 'react'
import { SortOption } from '../../shared/interfaces'

type CustomSelectProps = {
  options: SortOption[],
  placeholder: string,
  onChange: (value : SortOption) => void,
}

export default function CustomSelect({ options, onChange, placeholder }: CustomSelectProps) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [choice, setChoice] = useState<SortOption>({
    value: "",
    label: placeholder,
  })

  return (
    <div>
      <div
        className="border-1 relative flex w-48 items-center justify-between
                   space-x-4 divide-x rounded-lg border
                   border-white p-2 pl-3 text-lg text-white cursor-pointer"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <h2>{choice.label}</h2>
        <div className="pl-2 hover:text-spaceTealHover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="absolute">
        {showDropDown && (
          <div className="z-20 w-48 rounded-lg bg-spacePrimary p-3 flex flex-col space-y-2">
            {options.map((option: SortOption, index) => (
              <p
                className="pl-2 text-lg text-white hover:bg-spacepink cursor-pointer"
                onClick={() => {
                  setShowDropDown(false)
                  setChoice(option)
                  onChange(option);
                }}
                key={index}
              >
                {option.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

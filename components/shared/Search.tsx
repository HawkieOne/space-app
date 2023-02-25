import React, { ChangeEvent, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti'

interface SearchProps {
  onSearchClick: (searchTerm: string) => void
}

export default function Search({ onSearchClick }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="flex items-stretch rounded-xl border-2 border-spaceTitle">
      <div className="relative flex items-stretch">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-l-xl border-0 bg-gray-900 px-3 text-white focus:text-spacePink 
                     focus:outline-none focus:ring-0 focus:border-none"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value)
          }}
        />
        {searchTerm && (
          <button
            className={`absolute right-2 top-auto flex h-full flex-col justify-center text-spaceLightGrey 
                     hover:text-red-500`}
            onClick={() => setSearchTerm('')}
          >
            <TiDelete size="1.25em" />
          </button>
        )}
      </div>
      <button
        className="rounded-r-lg bg-spaceTitle p-2 text-white hover:bg-spaceTealHover"
        onMouseDown={() => onSearchClick(searchTerm)}
      >
        <AiOutlineSearch size="1.5em" />
      </button>
    </div>
  )
}

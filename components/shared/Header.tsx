import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <Link href="/">
      <div className="flex items-center justify-center space-x-5 bg-slate-800 p-6 text-white">
        <div className="h-12 w-12 text-red-400 hover:cursor-pointer">
          <img src="space.svg" className="text-red-400" alt="space"></img>
        </div>
        <h1 className="text-3xl xl:text-5xl text-teal-600 hover:cursor-pointer">
          Spac<span className="text-teal-500">Q</span>
        </h1>
      </div>
    </Link>
  )
}

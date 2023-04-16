import Link from 'next/link'
import React, { useState } from 'react'
import { navLinks } from '../../shared/data';
import { useRouter } from 'next/router'
import { FcMenu } from 'react-icons/fc';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const router = useRouter()

  return (
    <header>
      <button className='block lg:hidden absolute top-6 left-3 text-black p-2' onClick={() => setMenuOpen(!menuOpen)}>
        <FcMenu size="2.25em"/>
      </button>

      <Link href="/">
        <div className="flex items-center justify-center space-x-5 bg-transparent p-6 text-white cursor-pointer">
          <div className="h-12 w-12 text-red-400 hover:cursor-pointer">
            <img src="space.svg" className="text-red-400" alt="space"></img>
          </div>
          <h1 className="text-3xl xl:text-5xl text-teal-600 hover:cursor-pointer">
            Spac<span className="text-teal-500">Q</span>
          </h1>
        </div>
      </Link>

      <nav className='block lg:hidden touch-none'>
        {menuOpen ? <div className='w-full overflow-scroll h-screen bg-gray-900 text-white'>
          <ul className='flex flex-col gap-1 p-2'>
            {navLinks.map((item, index) => {
              return (
                <Link href={item.path} key={index}>
                  <li onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium cursor-pointer
                    hover:outline-spaceTealHover hover:outline-1 hover:outline 
                    ${router.pathname === item.path ? `bg-spaceTealHover` : `bg-gray-900`}`}
                  >
                    {item.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div> : <></>}
      </nav>
    </header>
  )
}

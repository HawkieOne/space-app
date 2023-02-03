import React from 'react'
import Link from 'next/link'
import { navLinks } from '.././shared/data'
import { useRouter } from 'next/router'

export default function DashboardTabber() {
  const router = useRouter()
  return (
    <nav className="bg-slate-800">
      <div className="max-w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((item, index) => {
                  return (
                    <Link href={item.path} key={index}>
                      <h5
                        className={`desktop:text-md cursor-pointer rounded-md px-3 
                                     py-2 text-sm font-medium text-white
                                     ${
                                       router.pathname === item.path
                                         ? `bg-spaceTealHover`
                                         : `bg-gray-900`
                                     }`}
                      >
                        {item.name}
                      </h5>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

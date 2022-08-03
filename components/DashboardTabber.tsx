import React from 'react'
import Link from 'next/link'
import { navLinks } from '.././shared/data'

export default function DashboardTabber() {
  return (
    <div className="">
      <nav className="bg-slate-800">
        <div className="mx-auto max-w-4/5 px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map((item, index) => {
                    return (
                      <Link href={item.path} key={index}>
                        <h5 className="cursor-pointer rounded-md bg-gray-900 px-3 py-2 
                                       text-sm font-medium text-white xl:text-xl">
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
    </div>
  )
}

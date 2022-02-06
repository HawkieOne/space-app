import React from 'react';
import Link from 'next/link'
import { navLinks } from '.././shared/data';

export default function DashboardTabber() {
  return (
    <div className="">
        <nav className="bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((item, index) => { 
                                    return (
                                        <Link href={item.path} key={index}>
                                            <h5 className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">{item.name}</h5>
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
  );
}

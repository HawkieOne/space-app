import React from 'react';
import Link from 'next/link'

export default function Error404() {
    return (
        <div className="m-auto bg-transparent h-full w-full font-mono flex flex-col items-center justify-center relative z-10
            text-center text-white font-extrabold">
            <h1 className="text-7xl text-red-500 leading-tight">
                404
            </h1>
            <h2 className="text-2xl leading-tight">
                Page not found
            </h2>
            <h3 className='text-sm font-bold'>
                Oops! The page you're were looking does not exist.
            </h3>
            <Link href={'/'} key={'/'}>
                <h5
                    className={`mt-8 desktop:text-md cursor-pointer rounded-md px-3 
                                     py-2 text-xl font-medium bg-gray-900
                                    hover:outline-spaceTealHover hover:outline-2 hover:outline`}
                >
                    Back to Home
                </h5>
            </Link>
        </div>
    );
}

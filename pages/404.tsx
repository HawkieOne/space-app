import React from 'react';

export default function Error404() {
  return (
        <div className="bg-gray-900 h-full w-full font-mono flex flex-col items-center justify-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4 animate-pulse hover:animate-none hover:text-red-500">
                You're alone here
            </h1>
            <p className="font-extrabold text-8xl my-32 text-white animate-pulse hover:animate-none hover:text-red-500">
                404
            </p>
        </div>
    );
}

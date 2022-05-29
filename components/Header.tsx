import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-center items-center space-x-5 bg-slate-800 text-white p-6">
          <div className="h-12 w-12 text-red-400">
            <img src="space.svg" className="text-red-400" alt="space"></img>
          </div>
        <h1 className="text-3xl text-teal-600">Spac<span className="text-teal-500">Q</span></h1>
    </div>
  );
}

import React from 'react';

export default function InfoCard({ className, header, children } : any ) {
  return (
    <div className={"info-card px-6 py-1 divide-y divide-white w-fit " + className}>
        <h1 className="text-center pt-2 text-red-300">
            {header}
        </h1>
        <div className="py-4 flex flex-col">
            {children}
        </div>
    </div>
  );
}

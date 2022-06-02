import React, { useEffect, useState } from 'react';

export default function AgencyCard( agency : any ) {
  return (
    <div className="flex flex-col justify-center items-center m-8">
        <div id="app" className="bg-white w-full h-60 rounded shadow-md flex card text-grey-darkest">
            {agency.agency.image_url !== null
                ? <img className="w-128 h-full rounded-l-lg border-l-white border-l-2" src={agency.agency.image_url} alt="Agency image" />
                : <img className="w-128 h-full rounded-l-lg border-l-white border-l-2" src="alone.jpg" alt="Agency image" />
            }            
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <div className="flex space-x-2">
                        <h3 className="font-light mb-1 text-teal-500 uppercase">{agency.agency.abbrev}</h3>
                        <h2 className="font-light mb-1 text-fuchsia-500 uppercase">{agency.agency?.founding_year}</h2>
                    </div>
                    <div className="flex space-x-2">
                        <div className="text-xs flex items-center mb-4 bg-yellow-500 rounded-full px-2 py-1">
                            {agency.agency.country_code}
                        </div>
                        {/* <div className="text-xs flex items-center mb-4 bg-sky-500 rounded-full px-2 py-1">
                            {event.event.launches[0]?.launch_service_provider.name}
                            {event.event.location}
                        </div>
                        <div className="text-xs flex items-center mb-4 bg-lime-500 rounded-full px-2 py-1">
                            {event.event.launches[0]?.name}
                        </div> */}
                    </div>
                    <span className="text-5xl text-grey-darkest">{agency.agency.name}</span>
                    <div className="flex items-center mt-4">
                        <div className="pr-2 text-xs">
                            <i className="fas fa-wifi text-green"></i> {agency.agency.type}
                        </div>
                    </div>
                </div>
                {/* <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Book Now
                    <i className="fas fa-chevron-right"></i>
                </div> */}
            </div>
        </div>
    </div>
  );
}

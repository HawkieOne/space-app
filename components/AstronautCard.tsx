import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function AstronautCard( astronaut : any ) {
  return (
    <motion.div 
        layout
        animate={{ opacity: 1}} 
        initial={{ opacity: 0 }} 
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-col justify-center items-center m-8"
    >
        <div id="app" className="bg-white w-full h-60 rounded shadow-md flex card text-grey-darkest">
            {astronaut.astronaut.image_url !== null
                ? <img className="w-128 h-full rounded-l-lg border-l-white border-l-2" src={astronaut.astronaut.profile_image} alt="Agency image" />
                : <img className="w-128 h-full rounded-l-lg border-l-white border-l-2" src="alone.jpg" alt="Agency image" />
            }            
            <div className="w-full flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <div className="flex space-x-2">
                        <h3 className="font-light mb-1 text-teal-500 uppercase">
                            {astronaut.astronaut.date_of_birth} 
                            - 
                            {astronaut.astronaut.date_of_death}
                        </h3>
                        {/* <h2 className="font-light mb-1 text-fuchsia-500 uppercase">{agency.agency?.founding_year}</h2> */}
                    </div>
                    <div className="flex space-x-2">
                        <div className="text-xs flex items-center mb-4 bg-yellow-500 rounded-full px-2 py-1">
                            {astronaut.astronaut.nationality}
                        </div>
                        <div className="text-xs flex items-center mb-4 bg-sky-500 rounded-full px-2 py-1">
                            {astronaut.astronaut.agency.name}
                        </div>
                        {/* <div className="text-xs flex items-center mb-4 bg-lime-500 rounded-full px-2 py-1">
                            {event.event.launches[0]?.name}
                        </div> */}
                    </div>
                    <span className="text-5xl text-grey-darkest">{astronaut.astronaut.name}</span>
                    <div className="flex items-center mt-4">
                        <div className="pr-2 text-xs">
                            <i className="fas fa-wifi text-green"></i> {astronaut.astronaut.bio}
                        </div>
                    </div>
                </div>
                {/* <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                    Book Now
                    <i className="fas fa-chevron-right"></i>
                </div> */}
            </div>
        </div>
    </motion.div>
  );
}

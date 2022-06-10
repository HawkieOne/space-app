import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

export default function Spacestation({ spacestation, index} : any) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="cursor-pointer overflow-hidden rounded border-orange-600 bg-slate-800 shadow-lg hover:scale-105 hover:border-2"
        key={spacestation.id}
      >
        <img
          className="max-h-52 w-full bg-white"
          src={spacestation.image_url}
          alt="River"
        />
        <div className="px-4 py-2">
          <div className="mb-2 text-lg font-bold text-white">
            {spacestation.name}
          </div>
          <p className="text-base text-gray-700">
            {/* {spacestation.description} */}
          </p>
        </div>
        <div className="px-4 pt-2 pb-2">
          {spacestation.deorbited !== null ? (
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-red-700">
              Deorbited
            </span>
          ) : (
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-green-700">
              In orbit
            </span>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

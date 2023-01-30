import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import WikipediaButton from '../shared/WikipediaButton'

export default function SpacestationCard({ spacestation, index }: any) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="overflow-hidden rounded bg-slate-800 shadow-lg"
        key={spacestation.id}
      >
        <img
          className="max-h-52 w-full bg-white"
          src={spacestation.image_url}
          alt="Space station"
        />
        <div className="px-4 py-2">
          <div className="mb-2 text-lg font-bold text-white">
            {spacestation.name}
          </div>
          <p className="text-base text-gray-700">
            {/* {spacestation.description} */}
          </p>
        </div>
        <div className="flex justify-between px-4 py-2">
          <span className="mr-2 mb- inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-red-700">
          { spacestation.deorbited !== null ? "Deorbited" : "In orbit" }
          </span>
          {/* {spacestation.deorbited !== null ? (
            <span className="mr-2 mb- inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-red-700">
              Deorbited
            </span>
          ) : (
            <span className="mr-2 mb-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-green-700">
              In orbit
            </span>
          )} */}
          <WikipediaButton name={spacestation.name} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

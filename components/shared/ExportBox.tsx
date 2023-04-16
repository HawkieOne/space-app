import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaWikipediaW, FaMapMarkerAlt } from 'react-icons/fa'
import { DownloadObject } from '../../shared/interfaces'
import fileDownload from 'js-file-download'
import apiProvider, { BASE_URL } from '../../api/utilitites/provider'
import { log } from 'console'

type ExportBoxProps = {
  fileName: string
  wikipedia: boolean
  locationId?: Number;
  data: DownloadObject
}

export default function ExportBox({
  fileName,
  wikipedia,
  locationId,
  data,
}: ExportBoxProps) {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md bg-gray-700 
          p-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none 
          focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <BsThreeDotsVertical size="1.25em" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md 
                                bg-gray-700 text-spaceTextInfo shadow-lg ring-1
                                 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {locationId &&
                <Menu.Item
                  onClick={() => {
                    const newTab = window.open('https://www.google.com/maps/search/?api=1&query=' +
                      0.0 + ',' + 0.0, '_blank');
                    apiProvider.getData(BASE_URL + 'location/' + locationId).then(location => {
                      if (location.pads.length > 0 && newTab) {
                        console.log(location.pads[0]);
                        newTab.location.href = 'https://www.google.com/maps/search/?api=1&query=' +
                          location.pads[0].latitude + ',' + location.pads[0].longitude;
                          console.log("he");
                          
                      }
                    })
                  }}
                >
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-violet-500 text-white' : 'text-spaceTextInfo'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaMapMarkerAlt className="mr-2 h-5 w-5" aria-hidden="true" />
                      Google Maps
                    </button>
                  )}
                </Menu.Item>
              }
              <Menu.Item
                onClick={() => {
                  if (window) {
                    window.open(
                      'https://www.wikipedia.com/wiki/' +
                      fileName.split(' ').join('_'),
                      '_blank'
                    )
                  }
                }}
              >
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-violet-500 text-white' : 'text-spaceTextInfo'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <FaWikipediaW className="mr-2 h-5 w-5" aria-hidden="true" />
                    Wikipedia
                  </button>
                )}
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  const file = JSON.stringify(data)
                  fileDownload(file, `${fileName}.json`)
                }}
              >
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-violet-500 text-white' : 'text-spaceTextInfo'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <HiDownload className="mr-2 h-5 w-5" aria-hidden="true" />
                    Download JSON
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import WikipediaButton from '../shared/WikipediaButton'
import Card from '../shared/Card';
import Text from '../shared/Text/Text';
import { TextConstants } from '../../shared/constants';
import InfoColorPill from '../shared/InfoColorPill';
import NullWrapper from '../shared/NullWrapper';
import bgImage from '../../public/Events.png';

export default function SpacestationCard({ item }: any) {
  return (
        <Card
          onClick={() => { }}
          data={{ name: item.name, content: item }}
          wikipedia={true}
          imgSrc={item?.image_url}
          bgImg={bgImage.src}
        >
          <div className="flex w-full flex-col justify-around space-y-2 p-4 pb-0">
            <div className="flex items-baseline space-x-2">
              <NullWrapper item={item.type}>
                <h3 className="text-md mb-1 font-light uppercase text-teal-500">
                  {item?.type.name}
                </h3>
              </NullWrapper>
            </div>
            <div className="flex space-x-2">
              <InfoColorPill data={item.deorbited !== null ? "Deorbited" : "In orbit"} 
              bgColor="bg-gray-900"
              textColor={item.deorbited !== null ? "text-red-700" : "text-green-500"} />
            </div>
            <span className="text-grey-darkest text-xl desktop:text-2xl">
              {item?.name}
            </span>
            {/* <div className="flex w-3/4 items-center pr-2">
              <Text text={item?.description} size={TextConstants.tiny} />
            </div> */}
          </div>
        </Card>
  )
}

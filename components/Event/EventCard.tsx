import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { Event } from '../../shared/interfaces'
import Card from '../shared/Card'

type EventCardProps = {
  event: Event
  onClick: () => void
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <Card onClick={onClick}>
      <img
        className="h-full w-80 xl:w-96 self-center rounded-lg object-cover shadow-2xl"
        src={event?.feature_image}
        alt="Event image"
      />
      <div className="flex w-full flex-col justify-start space-y-2">
        <div className="flex space-x-2">
          <h3 className="mb-1 font-light uppercase text-teal-500 text-lg xl:text-2xl">
            {event?.type.name}
          </h3>
          <h2 className="mb-1 font-light uppercase text-fuchsia-500 text-lg xl:text-2xl">
            {new Date(event?.date).toLocaleString()}
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs text-md xl:text-xl">
            {event?.location}
          </div>
          <div className="flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs text-md xl:text-xl">
            {event?.launches[0]?.launch_service_provider.name}
            {event?.location}
          </div>
          <div className="flex items-center rounded-full bg-lime-500 px-2 py-1 text-xs text-md xl:text-x4">
            {event?.launches[0]?.name}
          </div>
        </div>
        <span className="text-grey-darkest text-4xl xl:text-5xl">{event?.name}</span>
        <div className="flex items-center">
          <div className="pr-2 text-xs xl:text-toLocaleString">
            <i className="fas fa-wifi text-green"></i> {event?.description}
          </div>
        </div>
        <div className="mt- flex justify-start space-x-4">
          <div className="rounded-lg bg-spaceTitle p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>{' '}
          </div>
          <div className="rounded-lg bg-spaceTitle p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>{' '}
          </div>
        </div>
      </div>
    </Card>
  )
}

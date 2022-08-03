import React from 'react'
import Moment from 'react-moment'
import { Launch } from '../../shared/interfaces'

const TODAY = new Date()

type MomentTimeCardProps = {
  className?: string
  title: string
  launch: Launch
  dayColor?: string
  hasLaunchHappened?: boolean
}

export default function MomentTimeCard({
  className,
  title,
  launch,
  dayColor = 'text-emerald-700',
  hasLaunchHappened = false,
}: MomentTimeCardProps) {
  return (
    <div
      className={
        'info-card w-fit divide-y divide-white rounded-lg px-6 py-1 ' +
        className
      }
    >
      <h1 className="pt-2 text-center text-red-300 xl:text-3xl">{title}</h1>
      <div className="flex flex-col py-4 xl:text-xl">
        <p className="text-xl xl:text-3xl">{launch.rocket.full_name}</p>
        <Moment format="YYYY-MM-DD HH:SS" className="text-lg xl:text-2xl">
          {launch.net}
        </Moment>
        <div>
          <Moment diff={TODAY} unit="days" className={`text-3xl ${dayColor}`}>
            {launch.net}
          </Moment>
          <span className="ml-1 xl:text-3xl">
            {new Date(launch.net).getDay() === (1 | 0) ? 'day' : 'days'} 
            {hasLaunchHappened ? " from " : " to "}
            launch
          </span>
        </div>
      </div>
    </div>
  )
}

import Moment from 'react-moment'
import { TextConstants } from '../../shared/constants'
import { Launch } from '../../shared/interfaces'
import Text from './Text/Text'

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
        'flex flex-col rounded-lg bg-spacePrimary px-6 py-1 text-white shadow-lg ' +
        'px-3 py-4 space-y-4' +
        className
      }
    >
      <h1 className="text-center text-lg text-spaceTealHover laptop:text-xl desktop:text-3xl">
        {title}
      </h1>
      <div className="text-md laptop:text-md desktop:text-xl flex flex-col">
        <div className="self-center">
          <Text text={launch.rocket.full_name} size={TextConstants.small} />
        </div>
        <div className="flex justify-between">
          <Text text="Date" size={TextConstants.large} />
          <Moment format="YYYY-MM-DD HH:SS" className="text-lg desktop:text-xl">
            {launch.net}
          </Moment>
        </div>
        <div className="flex justify-between items-center">
          <Text
            text={`Days ${hasLaunchHappened ? ' since ' : ' to '} launch: `}
            size={TextConstants.large}
          />
          <Moment
            diff={TODAY}
            unit="days"
            className={`text-lg laptop:text-3xl ${dayColor}`}
          >
            {launch.net}
          </Moment>
        </div>
      </div>
    </div>
  )
}

import Moment from 'react-moment'
import { TextConstants } from '../../shared/constants'
import { Launch } from '../../shared/interfaces'
import Text from './Text/Text'

const TODAY = new Date()

type MomentTimeCardProps = {
  className?: string
  title: string
  launch: Launch | null
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
        'flex flex-col rounded-lg bg-spacePrimary px-3 py-2 text-white shadow-lg ' +
        'space-y-1' +
        className
      }
    >
      <h1 className="text-md text-left text-spaceTealHover laptop:text-lg desktop:text-2xl">
        {title}
      </h1>
      <div className="text-md laptop:text-md flex flex-col desktop:text-md">
        <div className="self-start text-blue-500">
          <Text text={launch ? launch.name : ""} size={TextConstants.small} />
        </div>
        <div className="flex justify-between items-center">
          <Text text="Date" size={TextConstants.medium} />
          {launch ? (
            <Moment
              format="YYYY-MM-DD HH:SS"
              className="text-sm desktop:text-md"
            >
              {launch.net}
            </Moment>
          ) : (
            <Text text="No planned launch" size={TextConstants.small} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <Text
            text={`Days ${hasLaunchHappened ? ' since ' : ' to '} launch: `}
            size={TextConstants.medium}
          />
          {launch ? (
            <Moment
              diff={TODAY}
              unit="days"
              className={`text-md laptop:text-2xl ${dayColor}`}
            >
              {launch.net}
            </Moment>
          ) : (
            <Text text="No planned launch" size={TextConstants.small} />
          )}
        </div>
      </div>
    </div>
  )
}

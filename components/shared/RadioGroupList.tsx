import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { Launch } from '../../shared/interfaces'
import CodeIcon from './Icons/CodeIcon'

type RadioGroupProps = {
  values: Launch[]
  value: Launch
  onChange: (launch: Launch) => void
  title?: string
}

export default function RadioGroupLaunchesList({
  values,
  value,
  onChange,
  title,
}: RadioGroupProps) {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="flex flex-col space-y-1"
    >
      {title && (
        <RadioGroup.Label className="text-center text-xl text-spaceTitle">
          {title}
        </RadioGroup.Label>
      )}
      {values!.map((launch: Launch, _) => (
        <RadioGroup.Option
          value={launch}
          key={launch.id}
          className={({ active, checked }) =>
            `${
              active
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                : ''
            }
                  ${
                    checked
                      ? 'bg-spaceTealHover bg-opacity-75 text-white'
                      : 'bg-spacePrimary'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
          }
        >
          {({ active, checked }) => (
            <>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label as="p" className={`font-medium`}>
                      {launch.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={`inline ${
                        checked ? 'text-sky-100' : 'text-gray-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

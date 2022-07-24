import React from 'react'
import { LaunchVehicle } from '../../shared/interfaces';
import Card from '../shared/Card'


type LaunchVehicleCardProps = {
    launchVehicle: LaunchVehicle
};

export default function LaunchVehicleCard({ launchVehicle} : LaunchVehicleCardProps) {
  return (
    <Card onClick={() => {}}>
    {launchVehicle.image_url && (
    <img
    className="h-full w-40 rounded-l-lg object-cover"
    src={launchVehicle.image_url}
    alt="Event image"
  />
  )}
  <div className="flex w-full flex-col">
    <div className="flex-1 p-4 pb-0">
      <div className="flex space-x-2">
        <h3 className="mb-1 font-light uppercase text-teal-500">
          {launchVehicle.serial_number}
        </h3>
        <h2 className="mb-1 font-light uppercase text-fuchsia-500">
          {launchVehicle.launcher_config.name}
        </h2>
      </div>
      <div className="flex space-x-2">
        <div className="mb-4 flex items-center rounded-full bg-yellow-500 px-2 py-1 text-xs">
          {launchVehicle.launcher_config.full_name}
        </div>
        <div className="mb-4 flex items-center rounded-full bg-sky-500 px-2 py-1 text-xs">
          {launchVehicle.launcher_config.variant}
        </div>
      </div>
    </div>
  </div>
</Card>
  )
}

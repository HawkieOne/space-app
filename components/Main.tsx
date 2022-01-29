import DashboardTabber from "./DashboardTabber";
import InfoCard from "./InfoCard";

export default function Main() {
  return (
    <div className="h-full w-full grid grid-cols-6 grid-rows-6 gap-4 p-4 bg-gray-900">
      <div className="row-span-1 col-span-6">
        <DashboardTabber />
      </div>

      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />

      <div className="current-card">
        <div className="pl-2 pt-2">
          Hello
        </div>
      </div>
      <div className="current-card">
      <div className="pl-2 pt-2">
          Hello
        </div>
      </div>
    </div>
  )
}

import CircleLoadingIndicator from './CircleLoadingIndicator'
import PageTitle from './PageTitle'

type SubPageProps = {
  title: string
  children: React.ReactNode
}

export default function SubPage({
  title,
  children,
}: SubPageProps) {
  return (
    <div className="h-full flex flex-col items-center space-y-4 bg-gray-900 p-4">
      <PageTitle title={title} />
      {children ? children : <CircleLoadingIndicator />}
    </div>
  )
}

import React from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import BounceLoader from './BounceLoader'
import CircleLoadingIndicator from './CircleLoadingIndicator'
import PageTitle from './PageTitle'
import Search from './Search'

type SubPageProps = {
  title: string
  children: React.ReactNode
  onScrollBottom?: () => void
  initialLoading: boolean
  isLoading?: boolean
}

export default function SubPage({
  title,
  children,
  onScrollBottom,
  initialLoading,
  isLoading,
}: SubPageProps) {
  useBottomScrollListener(() => {
    if (onScrollBottom) {
      onScrollBottom()
    }
  })
  return (
    <div className="flex grow flex-col items-center justify-start p-4 py-8 bg-gray-900 space-y-4">
      <PageTitle title={title} />
      <Search />
      <div className="h-full flex flex-col items-center justify-stretch space-y-6">
        {children}
        {initialLoading && <CircleLoadingIndicator />}
        {isLoading && <BounceLoader />}
      </div>
    </div>
  )
}

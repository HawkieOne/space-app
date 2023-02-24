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
  showSearch?: boolean
  onSearchClick?: (searchTerm: string) => void 
}

export default function SubPage({
  title,
  children,
  onScrollBottom,
  initialLoading,
  isLoading,
  showSearch,
  onSearchClick
}: SubPageProps) {
  useBottomScrollListener(() => {
    if (onScrollBottom) {
      onScrollBottom()
    }
  })
  return (
    <div className="flex grow flex-col items-center justify-start space-y-4 bg-gray-900 p-4 py-8">
      <PageTitle title={title} />
      {showSearch && onSearchClick && (
        <div className='self-center'>
          <Search onSearchClick={onSearchClick}/>
        </div>
      )}
      <div className="justify-stretch flex h-full flex-col items-center space-y-6">
        {children}
        {initialLoading && <CircleLoadingIndicator />}
        {isLoading && <BounceLoader />}
      </div>
    </div>
  )
}

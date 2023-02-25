import React from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import { AiOutlineArrowUp } from 'react-icons/ai'
import BounceLoader from './BounceLoader'
import CircleLoadingIndicator from './CircleLoadingIndicator'
import PageTitle from './PageTitle'
import Search from './Search'
import IconButton from './IconButton'

type SubPageProps = {
  title: string
  children: React.ReactNode
  onScrollBottom?: () => void
  initialLoading: boolean
  isLoading?: boolean
  showSearch?: boolean
  onSearchClick?: (searchTerm: string) => void
  isSearchLoading?: boolean
  showScrollButton: boolean
}

export default function SubPage({
  title,
  children,
  onScrollBottom,
  initialLoading,
  isLoading,
  showSearch,
  onSearchClick,
  isSearchLoading,
  showScrollButton,
}: SubPageProps) {
  useBottomScrollListener(() => {
    if (onScrollBottom) {
      onScrollBottom()
    }
  })
  return (
    <div className="relative flex grow flex-col items-center justify-start space-y-4 bg-gray-900 p-4">
      <div className="flex w-3/4 items-center justify-between">
        {title && <PageTitle title={title} />}
        {showSearch && onSearchClick && !initialLoading && (
          <div className="self-center">
            <Search onSearchClick={onSearchClick} />
          </div>
        )}
      </div>
      <div className="justify-stretch flex h-full w-full flex-col items-center space-y-3">
        {!isSearchLoading && children}
        {isSearchLoading && <CircleLoadingIndicator />}
        {initialLoading && <CircleLoadingIndicator />}
        {isLoading && <BounceLoader />}
      </div>
      {showScrollButton && (
        <div className="fixed bottom-10 right-10">
          <IconButton
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <AiOutlineArrowUp size="1.5em" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

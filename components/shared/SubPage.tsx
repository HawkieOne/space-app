import React, { createRef, UIEvent, useEffect } from 'react'
import CircleLoadingIndicator from './CircleLoadingIndicator'
import PageTitle from './PageTitle'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

type SubPageProps = {
  title: string
  children: React.ReactNode
  onScrollBottom?: () => void
  isLoading?: boolean
}

export default function SubPage({
  title,
  children,
  onScrollBottom,
  isLoading
}: SubPageProps) {
  useBottomScrollListener(() => {
    if (onScrollBottom) {
      onScrollBottom()
    }
  })
  return (
    <div className="flex h-fit flex-col items-center space-y-4 bg-gray-900 p-4">
      <PageTitle title={title} />
      {children ? children : <CircleLoadingIndicator />}
      {isLoading && <CircleLoadingIndicator />}
    </div>
  )
}

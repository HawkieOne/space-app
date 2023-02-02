import React, { cloneElement, ReactElement, useEffect, useState } from 'react'
import { spaceAPI } from '../../api/spaceDevsApi'
import { BASE_URL } from '../../api/utilitites/provider'
import { TextConstants } from '../../shared/constants'
import { ApiResponse } from '../../shared/interfaces'
import SubPage from './SubPage'
import Text from './Text/Text'

interface PageProps {
  title: string
  listItem: ReactElement
  fetchFunc: (link: string) => Promise<any>
  baseLink: string
}

export default function Page({
  title,
  listItem,
  fetchFunc,
  baseLink,
}: PageProps) {
  const [content, setContent] = useState<any[]>([])
  const [link, setLink] = useState<string | null>(baseLink)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData(link, fetchFunc)
  }, [])

  const fetchData = async (
    link: string | null,
    fetchFunc: (link: string) => Promise<any>
  ) => {
    if (link) {
      await fetchFunc(link)
        .then((res: ApiResponse) => {
          setContent([...content, ...res.results])
          setLink(res.next)
        })
        .catch((error) => {
          setLink('')
          console.log(error)
        })
    }
  }

  return (
    <SubPage
      title={title}
      onScrollBottom={async () => {
        if (link && !isLoading) {
          setIsLoading(true)
          await fetchData(link, fetchFunc)
          setIsLoading(false)
        }
      }}
      isLoading={isLoading}
    >
      <>
        {content &&
          content.map((item: any, index: number) => {
            return cloneElement(listItem, {
              key: index,
              item: item,
            })
          })}
        {content.length > 0 && !link && (
          <Text
            text="All content has been loaded"
            size={TextConstants.small}
            color="text-emerald-700"
          />
        )}
      </>
    </SubPage>
  )
}

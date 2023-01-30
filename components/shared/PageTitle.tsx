import React from 'react'

type PageTitleProps = {
    title: string,
}

export default function PageTitle({ title } : PageTitleProps) {
  return (
    <h1 className="text-spaceTitle text-4xl text-center">
        {title}
    </h1>
  )
}

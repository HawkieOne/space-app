import React from 'react'

type BoxProps = {
  width?: string
  height?: string
  rounded?: string
  padding?: string
  styles?: string
  children?: JSX.Element
  spaceY?: string
  spaceX?: string
  flex?: string
}

export default function Box({
  width,
  height,
  rounded,
  padding,
  styles,
  children,
  spaceY,
  spaceX,
  flex
}: BoxProps) {
  return (
    <div
      className={`${width} ${height} ${rounded} ${padding} ${spaceY} ${spaceX}
                  ${styles} ${flex}`}
    >
      {children}
    </div>
  )
}

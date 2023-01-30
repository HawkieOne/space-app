import React from 'react'

interface NullWrapperProps {
  item: any
  children: React.ReactNode
}

export default function NullWrapper({ item, children }: NullWrapperProps) {
  return item && children;
}

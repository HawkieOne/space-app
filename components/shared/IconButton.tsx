import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: JSX.Element;
}

export default function IconButton({
  onClick,
  children
}: ButtonProps) {
  return (
    <button
      className="rounded-lg bg-spaceTitle p-2 hover:bg-spacePink h-12"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

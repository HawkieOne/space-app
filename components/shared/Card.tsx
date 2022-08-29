type CardProps = {
  children: React.ReactNode,
  onClick: () => void,
}

export default function Card({ children, onClick }: CardProps) {
  return (
    <div className="flex text-spaceText bg-spacePrimary p-4
                    rounded shadow-md space-x-4 w-3/4"
        onClick={onClick}
    >
      {children}
    </div>
  )
}

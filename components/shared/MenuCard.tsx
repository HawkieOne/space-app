type CardProps = {
    children: React.ReactNode,
    onClick: () => void,
  }
  
  export default function MenuCard({ children, onClick }: CardProps) {
    return (
      <div className="flex text-spaceText bg-spacePrimary p-4
                      shadow-md space-x-4 hover:bg-spacePink cursor-pointer"
          onClick={onClick}
      >
        {children}
      </div>
    )
  }
  
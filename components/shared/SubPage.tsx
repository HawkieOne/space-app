import PageTitle from "./PageTitle"

type SubPageProps = {
    title: string,
    children: React.ReactNode,
}

export default function SubPage({ title, children } : SubPageProps) {

  return (
    <div className=" bg-gray-900 space-y-8 p-4 flex flex-col items-center">
      <PageTitle title={title} />
      {children}
    </div>
  )
}

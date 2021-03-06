import Main from '../components/Main'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-gray-900">
      <Head>
        <title>Space app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full">
        <Main />
      </main>
    </div>
  )
}

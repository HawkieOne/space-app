import Main from '../components/Main'
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900">
      <Head>
        <title>Space app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main className="h-full w-ful flex-grow">
        <Main />
      </main>
    </div>
  )
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardTabber from '../components/DashboardTabber'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-full w-full flex-col bg-gray-900">
      <Head>
        <title>SpacQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <DashboardTabber />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

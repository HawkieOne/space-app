import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardTabber from '../components/DashboardTabber'
import Header from '../components/shared/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen h-fit w-full flex-col bg-space bg-fixed">
      <Head>
        <title>SpacQ</title>
        <link rel="icon" href="/space.ico" />
      </Head>
      <Header />
      <DashboardTabber />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

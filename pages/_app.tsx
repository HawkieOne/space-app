import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import DashboardTabber from '../components/DashboardTabber'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-900">
    <header>
      <Header />
    </header>
    <DashboardTabber />
    <Component {...pageProps} />
  </div>
  )  
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardTabber from '../components/DashboardTabber'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-full flex flex-col bg-gray-900">
    <header>
      <Header />
    </header>
    <DashboardTabber />
    <Component {...pageProps} />
  </div>
  )  
}

export default MyApp

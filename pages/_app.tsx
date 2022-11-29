import '../styles/globals.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import NavList from '../components/navlist';
import Footer from '../components/footer';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    sessionStorage.setItem('lang', 'en')
  })
  return (
    <>
      <div className="wrapper" >

        <NavList />
        <Component {...pageProps} />
        <Footer />

      </div >
    </>);
}



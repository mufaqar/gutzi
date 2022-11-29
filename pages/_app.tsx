import '../styles/globals.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className="wrapper" >


        <Component {...pageProps} />


      </div >
    </>);
}



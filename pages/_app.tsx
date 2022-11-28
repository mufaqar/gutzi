import '../styles/globals.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/navlist';
import Footer from '../components/footer';


export default function App({ Component, pageProps }: AppProps) {
  return (<><div className="wrapper" ><Header /><Component {...pageProps} /><Footer /></div></>);
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Header({ navlist }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>AvanzaTec | We bring your vision to life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>
      <header
        className={`${
          router.pathname === '/' ? 'header' : 'header header-dark'
        } `}
      >
        <div className="shell">
          <div className="header__inner">
            <div className="header__content">
              <Link href="/" className="logo header__logo">
                <Image
                  src="/images/logo.svg"
                  alt="AvanzaTec Logo"
                  width="2000"
                  height="2000"
                />
              </Link>
              <div className="header__nav js-mobile-nav">
                <nav className="nav">
                  <ul>
                    <li>
                      <Link href="/">{navlist.home}</Link>
                    </li>

                    <li>
                      <Link href="/#team">{navlist.team}</Link>
                    </li>

                    <li>
                      <Link href="/#about">{navlist.about}</Link>
                    </li>

                    <li>
                      <Link href="/#contact">{navlist.contact}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <aside className="header__aside">
              <nav className="nav-lang">
                <ul>
                  <li className="is-current">
                    <Link href="/">
                      <Image
                        src="/images/lang-de.png"
                        alt=""
                        width="30"
                        height="19"
                      />
                      <span>De</span>
                    </Link>
                    <ul>
                      {/* <li>
                        <Link
                          href={router.asPath}
                          locale={router.locale === 'en' && 'de'}
                        >
                          <Image
                            src="/images/lang-de.png"
                            alt=""
                            width="30"
                            height="19"
                          />
                          <span>de</span>
                        </Link>
                      </li> */}

                      <li>
                        <Link
                          href={router.asPath}
                          locale={router.locale === 'de' && 'en'}
                        >
                          <Image
                            src="/images/lang-en.png"
                            alt=""
                            width="30"
                            height="19"
                          />
                          <span>En</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>

            <a href="#" className="nav-trigger js-nav-trigger">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

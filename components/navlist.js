import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  useTranslation,
  LanguageSwitcher,
} from "next-export-i18n";


export default function Header() {
  const router = useRouter();
	const { query } = router;
	const flage = query.lang === "en" ? "/images/lang-en.png" : "/images/lang-de.png";
	const label = query.lang === "en" ? "EN" : "DE";
  const { t } = useTranslation();

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
                      <Link href="/">{t('navlist.home')}</Link>
                    </li>

                    <li>
                      <Link href="/#team">{t('navlist.team')}</Link>
                    </li>

                    <li>
                      <Link href="/#about">{t('navlist.about')}</Link>
                    </li>

                    <li>
                      <Link href="/#contact">{t('navlist.contact')}</Link>
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
                        src={flage}
                        alt=""
                        width="30"
                        height="19"
                      />
                      <span>{label}</span>
                    </Link>
                    <ul>
                    <LanguageSwitcher lang="de">
                      <li>
                        
                          <Image
                            src="/images/lang-de.png"
                            alt=""
                            width="30"
                            height="19"
                          />
                          <span>de</span>
                      
                      </li>
                      </LanguageSwitcher>

                      <LanguageSwitcher lang="en">
                      <li>
                        
                          <Image
                            src="/images/lang-en.png"
                            alt=""
                            width="30"
                            height="19"
                          />
                          <span>En</span>
                       
                      </li>
                      </LanguageSwitcher>

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

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';



export default function Header({ navlist }) {
  const router = useRouter();
  return (
    <>
      <header className="header">
        <div className="shell">
          <div className="header__inner">
            <div className="header__content">
              <Link href="/" className="logo header__logo">
                <Image
                  src="/images/temp/logo.svg"
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
                      <a href="#team">{navlist.team}</a>
                    </li>

                    <li>
                      <a href="#about">{navlist.about}</a>
                    </li>

                    <li>
                      <a href="#contact">{navlist.contact}</a>
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
                        src="/images/temp/lang-en.png"
                        alt=""
                        width="30"
                        height="19"
                      />
                      <span>en</span>
                    </Link>
                    <ul>
                      <li>
                        <Link href={router.asPath} locale={router.locale === 'en-US' && 'de'}>
                          <Image
                            src="/images/temp/lang-de.png"
                            alt=""
                            width="30"
                            height="19"
                          />
                          <span>de</span>
                        </Link>
                      </li>

                      <li>
                        <Link href={router.asPath} locale={router.locale === 'de' && 'en-US'}>
                          <Image
                            src="/images/temp/lang-en.png"
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

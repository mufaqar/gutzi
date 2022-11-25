import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

//import logo from 'images/temp/logo.svg';

export default function Header() {
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
                      <Link href="/">Home</Link>
                    </li>

                    <li>
                      <a href="#team">Team</a>
                    </li>

                    <li>
                      <a href="#about">About</a>
                    </li>

                    <li>
                      <a href="#contact">Contact</a>
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
                        <a href="#">
                          <Image
                            src="/images/temp/lang-de.png"
                            alt=""
                            width="30"
                            height="19"
                          />

                          <span>de</span>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <Image
                            src="/images/temp/lang-fr.png"
                            alt=""
                            width="30"
                            height="19"
                          />

                          <span>fr</span>
                        </a>
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

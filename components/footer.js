import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer({ contact }) {
  return (
    <>
      <footer className="footer">
        <div className="footer__content" id="contact">
          <div className="shell">
            <div className="footer__content-inner">
              <div className="footer__aside">
                <h3>{contact.title}</h3>

                <div className="contacts">
                  <ul>
                    <li>
                      <figure>
                        <svg className="ico-pin">
                          <use xlinkHref="images/sprite.svg#ico-pin"></use>
                        </svg>
                      </figure>

                      <p>Gontershofenstrasse 15, 9572 Weinfelden</p>
                    </li>

                    <li>
                      <figure>
                        <svg className="ico-mail">
                          <use xlinkHref="images/sprite.svg#ico-mail"></use>
                        </svg>
                      </figure>

                      <a href="mailto:info@avanzatec.ch">info@avanzatec.ch</a>
                    </li>
                  </ul>
                </div>
              </div>

              <figure className="footer__image">
                <Image
                  src="/images/temp/footer-image.svg"
                  alt=""
                  width="430"
                  height="360"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="footer__bar">
          <div className="shell">
            <div className="footer__bar-inner">
              <a href="#" className="footer__logo logo">
                <Image
                  src="/images/temp/logo-footer.svg"
                  alt="AvanzaTec Logo"
                  width="262"
                  height="53"
                />
              </a>

              <ul className="footer__bar-list">
                <li>
                  <p className="copyright">
                    2022 AvanzaTec All Rights Reserved{' '}
                  </p>
                </li>

                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import Image from 'next/image';
import React from 'react';

export default function Apps() {
  return (
    <>
      <section className="section-small">
        <div className="shell">
          <div className="section__inner">
            <ul className="list-logos">
              <li>
                <a href="#">
                  <Image
                    src="/images/apps/No_image.svg"
                    alt=""
                    width="116"
                    height="128"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <Image
                    src="/images/apps/No_image.svg"
                    alt=""
                    width="115"
                    height="145"
                  />
                </a>
              </li>

              <li>
                <a href="https://oxoa.ch/">
                  <Image
                    src="/images/apps/oxoa.svg"
                    alt="OXOA"
                    width="123"
                    height="129"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <Image
                    src="/images/apps/No_image.svg"
                    alt=""
                    width="109"
                    height="116"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    src="/images/apps/No_image.svg"
                    alt=""
                    width="129"
                    height="118"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

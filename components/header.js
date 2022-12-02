import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

export default function Header({ hereData }) {
  return (
    <>
      <Head>
        <title>AvanzaTec | We bring your vision to life</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </Head>
      <div className="hero" id="home">
        <div className="shell">
          <div className="hero__inner">
            <div className="hero__content">
              <h1>{hereData.hero_title}</h1>
              <div className="hero__entry">
                <p>{hereData.hero_content}</p>
              </div>
              <a href="#" className="btn">
                {hereData.hero_button}
              </a>
            </div>
            <figure className="hero__image">
              <Image
                src="/images/temp/hero-image.png"
                alt=""
                width="675"
                height="582"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

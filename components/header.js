import Image from 'next/image';
import React from 'react';


export default function Header({ hereData }) {
  return (
    <>
      
      <div className="hero" id="home">
        <div className="shell">
          <div className="hero__inner">
            <div className="hero__content">
              <h1>{hereData('heredata.hero_title')}</h1>
              <div className="hero__entry">
                <p>{hereData('heredata.hero_content')}</p>
              </div>
              <a href="https://oxoa.ch/" className="btn">
                {hereData('heredata.hero_button')}
              </a>
            </div>
            <figure className="hero__image">
              <Image
                src="/images/hero-image.png"
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

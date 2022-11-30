import React from 'react';
import Image from 'next/image';

// type about = {
//     vision: string;
//     vision_detail: string;
//     about: string;
//     about_detail: string;
//     readmore: string;
// }

export default function About({ about }) {
  return (
    <>
      <section className="section-about" id="about">
        <div className="shell">
          <div className="section__inner">
            <div className="section__content">
              <h3>{about.vision}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: about.vision_detail,
                }}
              ></div>
              <h3 className="about_title"> {about.about}</h3>

              <div
                className="section__entry"
                dangerouslySetInnerHTML={{
                  __html: about.about_detail,
                }}
              ></div>

              <a href="#" className="link">
                {' '}
                {about.readmore}
              </a>
            </div>

            <figure className="section__image">
              <Image
                src="/images/temp/section-about-image.png"
                alt=""
                width="550"
                height="571"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

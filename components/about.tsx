import React from 'react'
import Image from 'next/image'
//import { en, de } from '../../public/translation';


export default function About({ about }) {
    return (
        <><section className="section-about" id="about">
            <div className="shell">
                <div className="section__inner">
                    <div className="section__content">
                        <h3>{about.vision}</h3>
                        <p

                            dangerouslySetInnerHTML={{
                                __html: about.vision_detail,
                            }}
                        ></p>
                        <h3> {about.about}</h3>

                        <p
                            className="section__entry"
                            dangerouslySetInnerHTML={{
                                __html: about.about_detail,
                            }}
                        ></p>



                        <a href="#" className="link"> {about.readmore}</a>
                    </div>

                    <figure className="section__image">
                        <Image src="/images/temp/section-about-image.png" alt="" width="550" height="571" />
                    </figure>
                </div>
            </div>
        </section></>
    )
}

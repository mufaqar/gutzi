import React from 'react'
import Image from 'next/image'

export default function MadeBy({ appmade }) {
    return (
        <><section className="section-apps">
            <div className="shell">
                <header className="section__head">
                    <h3>{appmade('appmade.title')}</h3>
                </header>

                <div className="section__body">
                    <div className="cards">
                        <ul>
                            <li>
                                <div className="card-app">
                                    <a href="https://oxoa.ch/"></a>

                                    <figure className="card__image">
                                        <Image src="/images/OXOA_App.png" width="768" height="593" alt="" />
                                    </figure>

                                    <div className="card__content">
                                        <h5>OXOA App</h5>

                                        <p>App Development</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="card-app card-app--mint">
                                    <a href="https://oxoa.ch/"></a>

                                    <figure className="card__image">
                                        <Image src="/images/OXOA_Web.png" width="768" height="593" alt="OXOA Desktop" />
                                    </figure>

                                    <div className="card__content">
                                        <h5>OXOA Web</h5>

                                        <p>App Development</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section></>
    )
}

import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <>

            <div className="hero" id="home">
                <div className="shell">
                    <div className="hero__inner">
                        <div className="hero__content">
                            <h1>Wir erwecken Ihre Vision zum Leben</h1>
                            <div className="hero__entry">
                                <p>AvanzaTec wurde aus dem Wunsch heraus gegründet, hochskalierbare Webservices und Apps für Unternehmen zu realisieren. Mit unseren bewährten Softwarelösungen setzen wir Ihre Vision in die Realität um und unterstützen Sie bei der Beschleunigung, Vereinfachung und Automatisierung Ihrer Prozesse. Dabei erstellen wir für Sie ein massgeschneidertes Produkt im modernen Design, das höchsten Ansprüchen gerecht wird.</p>
                            </div>
                            <a href="#" className="btn">get started</a>
                        </div>
                        <figure className="hero__image">
                            <Image src="/images/temp/hero-image.png" alt="" width="675" height="582" />
                        </figure>
                    </div>
                </div>
            </div>

        </>
    )
}

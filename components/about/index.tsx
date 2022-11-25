import React from 'react'
import Image from 'next/image'

export default function About() {
    return (
        <><section className="section-about" id="about">
            <div className="shell">
                <div className="section__inner">
                    <div className="section__content">
                        <h3>Unsere Vision</h3>
                        <p>Zu den zentralen Werten von AvanzaTec gehört die effiziente und innovative Programmierung hochwertiger Anwendungen für Ihr Unternehmen. Dank unserer bewusst kleinen Teamgrösse sparen wir den Umweg über viele Entwickler oder Agenturen und widmen uns unmittelbar Ihrem Projekt.</p>
                        <p>Diese Herangehensweise ermöglicht uns eine zeitsparende und kostengünstige Realisierung Ihrer Vision. Dabei denken wir bereits heute an Ihren Erfolg von morgen: Wir entwickeln Ihre App hochskalierbar, sodass sie jederzeit mit geringem Zeitaufwand erweitert werden und an Ihre geänderten Bedürfnisse angepasst werden kann.</p>
                        <p>Unser Team hat es sich zur Aufgabe gemacht, Ihre Vorstellungen nicht nur umzusetzen, sondern sie zu übertreffen. Neben unserer Programmier-Erfahrung von über 50 Jahren bringen wir in Ihr Projekt unsere Leidenschaft für Innovation und für anspruchsvolle Entwicklungsstrategien ein.</p>
                        <p>Deshalb sind hochwertige Anwendungen unser Standard, die dem aktuellen Zeitgeist entsprechen und flexibel mit Ihnen wachsen. Mit unserem technischen Knowhow hauchen wir Ihrer Vision Leben ein und freuen uns darauf, gemeinsam mit Ihnen neue Wege zu beschreiten.</p>
                        <h3>Über AvanzaTec</h3>

                        <div className="section__entry">
                            <p>Hochskalierbare Webservices und Apps – nahtlose Flexibilität</p>
                            <p>Der Status Quo ist vergänglicher denn je. Ihre Anwendung wächst mit Ihrem Unternehmen und ist damit stets den Anforderungen gewachsen, die auf Sie zukommen. Geniessen Sie den Komfort einer nahtlosen Flexibilität und einer reibungslosen Erweiterung, die Ihre App an Ihre Bedürfnisse anpasst.</p>

                            <p>Schnelle, sichere und potente Realisierung Ihres Projekts dank Microservice-Architektur</p>
                            <p>AvanzaTec bedient sich dem Microservice-Architekturkonzept, bei dem einzelne Komponenten Ihrer App oder Webanwendung unabhängig voneinander funktionieren. Diese Methode senkt die Fehleranfälligkeit Ihres Produkts dank des Wegfalls unbewusster Verkettungen einzelner Bereiche. Aufgrund der smarten Aufteilung können mehrere Entwickler gleichzeitig am Projekt arbeiten, was die Zeit bis zur Fertigstellung signifikant reduziert und auch die Kosten senkt.
                                Wünschen Sie in Zukunft eine Anpassung oder Erweiterung einzelner Funktionen, können wir Ihrem Wunsch schnell und kostengünstig nachkommen, da nicht die gesamte Anwendung neu überarbeitet werden muss. Auch etwaige technische Fehler lassen sich gezielt und zeitnah beheben, weil das Problem genau verortet und lokal ausgebessert werden kann. Mit der Microservice-Architektur stellen wir die hohe Skalierbarkeit Ihres Produkts sicher, die im schnelllebigen unternehmerischen Alltag unerlässlich ist.
                            </p>
                        </div>

                        <a href="#" className="link">Read more</a>
                    </div>

                    <figure className="section__image">
                        <Image src="/images/temp/section-about-image.png" alt="" width="550" height="571" />
                    </figure>
                </div>
            </div>
        </section></>
    )
}

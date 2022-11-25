import React, { Fragment, ReactElement, useState } from "react";
import Customerstestimonial from "./customerstestimonial.componen";
import Articles from "./articles.component";

export default function MainContent() {
  return (
    <div className="wrapper" >
		<header className="header">
	<div className="shell">
		<div className="header__inner">
			<div className="header__content">
				<a href="#" className="logo header__logo">
					<img src="images/temp/logo.svg" alt="AvanzaTec Logo" width="242" height="46" />
				</a>

				<div className="header__nav js-mobile-nav">
					<nav className="nav">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>

							<li>
								<a href="#">Team</a>
							</li>

							<li>
								<a href="#">About</a>
							</li>

							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>	

			<aside className="header__aside">
				<nav className="nav-lang">
					<ul>
						<li className="is-current">	
							<a href="/">
								<img src="images/temp/lang-en.png" alt="" width="30" height="19" />

								<span>en</span>
							</a>

							<ul>
								<li>
									<a href="#">
										<img src="images/temp/lang-de.png" alt="" width="30" height="19" />

										<span>de</span>
									</a>
								</li>
								
								<li>
									<a href="#">
										<img src="images/temp/lang-fr.png" alt="" width="30" height="19" />

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


		<div className="hero">
			<div className="shell">
				<div className="hero__inner">
					<div className="hero__content">
						<h1>Wir erwecken Ihre Vision zum Leben 123</h1>

						<div className="hero__entry">
							<p>AvanzaTec wurde aus dem Wunsch heraus gegründet, hochskalierbare Webservices und Apps für Unternehmen zu realisieren. Mit unseren bewährten Softwarelösungen setzen wir Ihre Vision in die Realität um und unterstützen Sie bei der Beschleunigung, Vereinfachung und Automatisierung Ihrer Prozesse. Dabei erstellen wir für Sie ein massgeschneidertes Produkt im modernen Design, das höchsten Ansprüchen gerecht wird.</p>
						</div>

						<a href="#" className="btn">get started</a>
					</div>

					<figure className="hero__image">
						<img src="images/temp/hero-image.png" alt="" width="675" height="582" />
					</figure>
				</div>
			</div>
		</div>

		<div className="main">
			<section className="section offset-top">
				<div className="shell">
					<div className="section__inner">
						<ul className="list-data">
							<li>
								<strong>50 <span>+</span></strong>

								<p>Jahre Erfahrung</p>
							</li>
							
							<li>
								<strong>40 <span>+</span></strong>

								<p>Sitzungen gefhürt</p>
							</li>
							
							<li>
								<strong>0</strong>

								<p>Ohne Motivation gearbeitet</p>
							</li>
							
							<li>
								<strong>3</strong>

								<p>Partner</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="section customerstestimonial">
				<div className="shell">
					<div className="section__inner">
            <Customerstestimonial></Customerstestimonial>
					</div>
				</div>
			</section>

			<section className="section-small">
				<div className="shell">
					<div className="section__inner">
						<ul className="list-logos">
							<li>
								<a>
									<img src="images/temp/list-logos-1.svg" alt="" width="116" height="128" />
								</a>
							</li>
							
							<li>
								<a>
									<img src="images/temp/list-logos-2.svg" alt="" width="115" height="145" />
								</a>
							</li>
							
							<li>
								<a>
									<img src="images/temp/list-logos-3.svg" alt="" width="123" height="129" />
								</a>
							</li>
							
							<li>
								<a>
									<img src="images/temp/list-logos-4.svg" alt="" width="109" height="116" />
								</a>
							</li>
							
							<li>
								<a>
									<img src="images/temp/list-logos-5.svg" alt="" width="129" height="118" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="section-apps">
				<div className="shell">
					<header className="section__head">
						<h3>Apps Made by AvanzaTec</h3>
					</header>

					<div className="section__body">
						<div className="cards">
							<ul>
								<li>
									<div className="card-app">
										<a href="#"></a>

										<figure className="card__image">
											<img src="images/temp/card-image-1.png" alt="" />
										</figure>

										<div className="card__content">
											<h5>OXOA App</h5>

											<p>App Development</p>
										</div>
									</div>
								</li>
								
								<li>
									<div className="card-app card-app--mint">
										<a href="#"></a>

										<figure className="card__image">
											<img src="images/temp/OXOA_Web.png" alt="OXOA Desktop" />
										</figure>

										<div className="card__content">
											<h5>OXOA Web</h5>

											<p>App Development</p>
										</div>
									</div>
								</li>

								<li className="desktop-order-4">
									<div className="card-app">
										<a href="#"></a>

										<figure className="card__image">
											<img src="images/temp/card-image-4.png" alt="" />
										</figure>

										<div className="card__content">
											<h5>lorem ipsum</h5>

											<p>Web Development</p>
										</div>
									</div>
								</li>
								
								<li>
									<div className="card-app card-app--mint">
										<a href="#"></a>

										<figure className="card__image">
											<img src="images/temp/card-image-3.png" alt="" />
										</figure>

										<div className="card__content">
											<h5>lorem ipsum</h5>

											<p>App Development</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="section-team">
				<div className="shell">
					<div className="section__inner">
						<h3>Our Team</h3>

						<div className="team">
							<ul>
								<li>
									<div className="team-member">
										<figure className="team-member__image">
											<img src="images/temp/member-1.png" alt="" width="358" height="348" />
										</figure>

										<div className="team-member__details">
											<h5>
												<strong>Pius Gutzwiller</strong> 

												<span>Position</span>
											</h5>

											<div className="member__info">
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
											</div>
										</div>
									</div>
								</li>
								
								<li>
									<div className="team-member">
										<figure className="team-member__image">
											<img src="images/temp/member-2.png" alt="" width="358" height="348" />
										</figure>

										<div className="team-member__details">
											<h5>
												<strong>Diego Frehner</strong> 

												<span>Position</span>
											</h5>

											<div className="member__info">
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
											</div>
										</div>
									</div>
								</li>
								
								<li>
									<div className="team-member">
										<figure className="team-member__image">
											<img src="images/temp/member-3.png" alt="" width="358" height="348" />
										</figure>

										<div className="team-member__details">
											<h5>
												<strong>Lucca Willi</strong>

												<span>Position</span>
											</h5>

											<div className="member__info">
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="section-about">
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
							<img src="images/temp/section-about-image.png" alt="" width="550" height="571" />
						</figure>
					</div>
				</div>
			</section>

			<section className="section-featured">
				<div className="shell">
					<header className="section__head">
						<h3>Featured Blog</h3>
					</header>

					<div className="section__body">
          <Articles></Articles>
					</div>
				</div>
			</section>
		</div>

		<footer className="footer">
	<div className="footer__content">
		<div className="shell">
			<div className="footer__content-inner">
				<div className="footer__aside">
					<h3>Kontaktangaben</h3>

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
					<img src="images/temp/footer-image.svg" alt="" width="430" height="360" />
				</figure>
			</div>
		</div>
	</div>

	<div className="footer__bar">
		<div className="shell">
			<div className="footer__bar-inner">
				<a href="#" className="footer__logo logo">
					<img src="images/temp/logo-footer.svg" alt="AvanzaTec Logo" width="262" height="53" />
				</a>

				<ul className="footer__bar-list">
					<li>
						<p className="copyright">2022 AvanzaTec All Rights Reserved </p>
					</li>
					
					<li>
						<a href="#">Privacy Policy</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
    </div>
  )
}

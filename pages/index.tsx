
import Hero from "../components/hero";
import Stats from "../components/stats";
import Testimonials from "../components/testimonails";
import Clients from "../components/clients";
import AppMade from "../components/app";
import Team from "../components/team";
import About from "../components/about";
import Featured from "../components/featured";
export default function Home() {
	return (
		<>
			<Hero />
			<div className="main">
				<Stats />
				<Testimonials />
				<Clients />
				<AppMade />
				<Team />
				<About />
				<Featured />
			</div>
		</>
	)
}

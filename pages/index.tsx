
import Hero from "../components/hero";
import Number from "../components/number";
import CustomersTestimonial from "../components/customerstestimonail";
import Apps from "../components/apps";
import MadeBy from "../components/madeby";
import OurTeam from "../components/ourteam";
import About from "../components/about";
import Featured from "../components/articles";
export default function Home() {
	return (
		<>
			<Hero />
			<div className="main">
				<Number />
				<CustomersTestimonial />
				<Apps />
				<MadeBy />
				<OurTeam />
				<About />
				<Featured />
			</div>
		</>
	)
}

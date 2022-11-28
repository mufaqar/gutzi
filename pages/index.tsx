
import Header from "../components/header";
import Number from "../components/number";
import CustomersTestimonial from "../components/customertestimonial";
import Apps from "../components/apps";
import MadeBy from "../components/madeby";
import OurTeam from "../components/ourteam";
import About from "../components/about";
import Articles from "../components/articles";
export default function Home() {
	return (
		<>
			<Header />
			<div className="main">
				<Number />
				<CustomersTestimonial />
				<Apps />
				<MadeBy />
				<OurTeam />
				<About />
				<Articles />
			</div>
		</>
	)
}

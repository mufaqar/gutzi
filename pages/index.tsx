
import Header from "../components/header";
import Number from "../components/number";
import CustomersTestimonial from "../components/customertestimonial";
import Apps from "../components/apps";
import MadeBy from "../components/madeby";
import OurTeam from "../components/ourteam";
import About from "../components/about";
import Articles from "../components/articles";
import { de, en } from '../public/translation'
import { useRouter } from 'next/router'
export default function Home() {

	const router = useRouter()
	const { locale } = router;
	const t = locale === "en-US" ? en : de

	const { heredata } = t;




	return (
		<>
			<Header hereData={heredata[0]} />
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

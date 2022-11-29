
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
import NavList from '../components/navlist';
import Footer from '../components/footer';

export default function Home() {

	const router = useRouter()
	const { locale } = router;
	const t = locale === "en-US" ? en : de
	const { heredata, navlist, about, number } = t;





	return (
		<>
			<NavList navlist={navlist[0]} />
			<Header hereData={heredata[0]} />
			<div className="main">
				<Number number={number[0]} />
				<CustomersTestimonial />
				<Apps />
				<MadeBy />
				<OurTeam />
				<About about={about[0]} />
				<Articles />
			</div>
			<Footer />
		</>
	)
}

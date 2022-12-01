
import Header from "../components/header";

import { de, en } from '../public/translation'
import { useRouter } from 'next/router'
import NavList from '../components/navlist';
import Footer from '../components/footer';
import Privacy from '../components/Privacy';

export default function PrivacyPage() {


	interface MyCodeParams {
		about: (param: any) => void
	}

	const router = useRouter()
	const { locale } = router;
	const t = locale === "en-US" ? en : de
	const { heredata, navlist, about, number, appmade, team, contact } = t;

	return (
		<>
			<NavList navlist={navlist[0]} />

			<div className="main">
				<Privacy />
			</div>
			<Footer contact={contact[0]} />
		</>
	)
}

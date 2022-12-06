import Head from 'next/head';
import NavList from '../components/navlist';
import Footer from '../components/footer';
import Privacy from '../components/Privacy';
import {
	useTranslation,
} from "next-export-i18n";

export default function PrivacyPage() {
	const { t } = useTranslation();
	interface MyCodeParams {
		about: (param: any) => void
	}



	return (
		<>
			<Head>
				<title> Privacy | AvanzaTec </title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/x-icon" href="/logo.svg" />
			</Head>
			<NavList />
			<div className="main">
				<Privacy />
			</div>
			<Footer contact={t} />
		</>
	)
}

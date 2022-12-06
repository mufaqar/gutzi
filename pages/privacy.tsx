


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
			<NavList />
			<div className="main">
				<Privacy />
			</div>
			<Footer contact={t} />
		</>
	)
}

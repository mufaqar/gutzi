import Header from "../components/header";
import Number from "../components/number";
import CustomersTestimonial from "../components/customertestimonial";
import Apps from "../components/apps";
import MadeBy from "../components/madeby";
import OurTeam from "../components/ourteam";
import About from "../components/about";
import Articles from "../components/articles";
import { useRouter } from 'next/router'
import NavList from '../components/navlist';
import Footer from '../components/footer';
import {
  useTranslation,
} from "next-export-i18n";

export default function Home() {
  const { t } = useTranslation();

  interface MyCodeParams {
    about: (param: any) => void;
  }

  // const router = useRouter()
  // const { locale } = router;
  // const t = locale === "en" ? en : de
  // const { heredata, navlist, about, number, appmade, team, contact, members, blog, testimonials } = t;

  return (
    <>
      <NavList />
      <Header hereData={t} />
			<div className="main">
				<Number number={t} />
				<CustomersTestimonial testimonials={t} />
				<Apps />
				<MadeBy appmade={t} />
				<OurTeam team={t} members={t} />
				<About about={t} />
				{/* <Articles blog={t} /> */}
			</div>
			<Footer contact={t} />
    </>
  );
}

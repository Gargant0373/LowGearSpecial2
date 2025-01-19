import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Hero from "./Hero";
import MoreInfo from "./MoreInfo";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Route from "./Route";
import Tickets from "./Tickets";

function Landing() {
    return <>
        <Navbar />
        <Hero />
        <Tickets />
        <AboutUs />
        <Route />
        <MoreInfo />
        <Questions />
        <Footer />
    </>
}

export default Landing;
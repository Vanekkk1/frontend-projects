import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import React from "react";


const HomePage: React.FC = () => {
    return <React.Fragment>
        <Hero />
        <HomeCards />
        <Jobs isHome={true} />
        <Footer />
    </React.Fragment>
}

export default HomePage;


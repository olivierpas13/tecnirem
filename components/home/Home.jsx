import HeroSection from "./HeroSection";
import Inspection from "./Inspection";
import ProjectsMasonry from "./ProjectsMasonry";
import Timeline from "./Timeline";

const Home = () => {
    return (
        <section>
            <HeroSection/>
            <Inspection/>
            <Timeline/>
            <ProjectsMasonry/>
        </section>
    );
}
 
export default Home;
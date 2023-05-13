import HeroSection from "./HeroSection";
import Inspection from "./Inspection";
import ProjectsMasonry from "./ProjectsMasonry";
import Timeline from "./Timeline";
import ServicesCards from "./ServicesCards";

const Home = () => {
    return (
        <section
        
        style={{
            padding: "0",
            margin: "0",
            overflow: "hidden",
          }}  
        >
            <HeroSection/>
            <Inspection/>
            <Timeline/>
            <ServicesCards/>
            <ProjectsMasonry/>
        </section>
    );
}
 
export default Home;
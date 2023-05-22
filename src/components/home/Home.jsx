import HeroSection from "./HeroSection";
import Inspection from "./Inspection";
import ProjectsMasonry from "./ProjectsMasonry";
import Timeline from "./Timeline";
import ServicesCards from "./ServicesCards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { mainTheme } from "@/utils/Pallete";

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
            <Box
            sx={{
                backgroundColor: "#eee",
                display: "flex",
                justifyContent: "center",
                width: "auto",
                textAlign: "center",
                padding: 0,
            }}
            >
            <Typography
            variant="h4"
            sx={{
                display: "inline-block",
              fontWeight: 400,
              lineHeight: 1,
              padding: 0,
              my: "1em",
              color: mainTheme.palette.primary.main,
            }}
          >
            Juntamos tus ideas con nuestros conocimientos
            <br/> para lograr un proyecto estético y funcional
          </Typography>
          </Box>

            <ServicesCards/>
            <ProjectsMasonry/>
        </section>
    );
}
 
export default Home;
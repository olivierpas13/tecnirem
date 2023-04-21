import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({children}) => {
    return (
        <section>
            <NavBar/>
             {children}
            <Footer/>
        </section>
    );
}
 
export default MainLayout;
import NavBar from "components/Navbar";

const MainLayout = ({children}) => {
    return (
        <section>
            <NavBar/>
             {children}
        </section>
    );
}
 
export default MainLayout;
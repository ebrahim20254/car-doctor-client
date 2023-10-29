import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Banner from "../Pages/Home/Banner/Banner";
import About from "../Pages/Home/About/About";
import Footer from "../Pages/Shared/Footer/Footer";
import Services from "../Pages/Home/Services/Services";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
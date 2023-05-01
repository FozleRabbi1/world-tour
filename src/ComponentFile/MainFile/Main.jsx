import { Outlet } from "react-router-dom";
import Nav from "../SharedFile/NavBarFile/Nav";
import Footerpage from "../SliderFIle/FooterFile/Footerpage";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footerpage></Footerpage>
        </div>
    );
};

export default Main;
import React from "react";
import NavBar from "./ui/Navbar";
import HeaderContent from "./ui/HeaderContent";


const Header = () => {
    return (
        <header className="min-h-screen flex flex-col justify-between">
            <NavBar/>
            <HeaderContent/>
        </header>
    )
}
 
export default Header;
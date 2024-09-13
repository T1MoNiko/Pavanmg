import React from "react";
import Links from "../../../features/Links/Links";
import Contacts from "../../../features/Contacts";
import Logo from "../ui/Logo";
import Container from "../../../shared/ui/Container/Container";
import Burger from "../../../features/Burger/Burger";

const NavBar = () => {
    return ( 
        <>
            <Container className={'flex justify-between pt-8'}>
                <Logo className={'self-end'}/>
                <div className="flex items-start">
                    <div className="flex items-center">
                        <Links className={"mt-2 text-[19px] font-medium text-[var(--text-color)] max-lg:hidden"}/>
                        <Burger className={"w-[30px] fill-[#666666] mr-5 lg:hidden cursor-pointer"}></Burger>
                        <Contacts/>
                    </div>
                </div>
            </Container>
        </>
    );
}
 
export default NavBar;
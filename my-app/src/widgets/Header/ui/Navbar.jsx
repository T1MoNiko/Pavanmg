import React from "react";
import Links from "../../../features/Links/Links";
import Contacts from "../../../features/Contacts";
import Logo from "../ui/Logo";
import Container from "../../../shared/ui/Container/Container";

const NavBar = () => {
    return ( 
        <>
            <Container className={'flex justify-between pt-8'}>
                <Logo className={'self-end'}/>
                <div className="flex items-start">
                    <div className="flex items-center">
                        <Links className={"mt-2 text-[19px] font-medium text-[var(--text-color)]"}/>
                        <Contacts/>
                    </div>
                </div>
            </Container>
        </>
    );
}
 
export default NavBar;
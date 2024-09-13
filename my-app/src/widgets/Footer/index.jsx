import React from "react";
import FooterContacts from "./ui/Contacts";
import Container from "../../shared/ui/Container/Container";
import FooterLogo from "./ui/FooterLogo";
import Links from "../../features/Links/Links";
import Text from "../../shared/ui/Text/Text";

const Footer = () => {
    const TransparentText = ({ children }) => { 
        return (
            <span className="text-transparent">{children}</span>
        )
    }

    return ( 
        <footer className="mt-48 pb-14">
            <Container className={"flex justify-between"}>
                <FooterLogo/>
                <FooterContacts/>
            </Container>
            <Container className={"border-y-2 border-[#cfcfcf] mt-8"}></Container>
            <Container className={"flex mt-14 items-center justify-between"}>
                <Links className={"text-[var(--title-color)]"}/>
                <Text className={"bg-clip-text bg-gradient-to-r from-violet-500 from-50% to-pink-500 to-85% mr-6"}>
                    Designed and built by <TransparentText>Pavan MG</TransparentText> with <TransparentText>Love</TransparentText> & <TransparentText>Coffee</TransparentText>
                </Text>
            </Container>
        </footer>
     );
}
 
export default Footer;
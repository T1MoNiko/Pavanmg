import React from "react";
import Contact from "./ui/Contact";

const Contacts = ({footer}) => {
    const icons = {
        header: [
            {img: "/img/github.svg", href: "/"},
            {img: "/img/twitter.svg", href: "/"},
            {img: "/img/linkedin.svg", href: "/"}
        ],
        footer: [
            {img: "/img/footerIcons/github.svg", href: "/"},
            {img: "/img/footerIcons/twitter.svg", href: "/"},
            {img: "/img/footerIcons/linkedIn.svg", href: "/"}
        ]
    }

    const Icons = () => {
        return (
            footer ? icons.footer.map((item, i) => (
                <Contact key={i} img={item.img} href={item.href}/>
            )) : icons.header.map((item, i) => (
                <Contact key={i} img={item.img} href={item.href}/>
            ))
        )
    }

    return ( 
        <div className="flex justify-between gap-4 w-[125px]">
            <Icons/>
        </div>
     );
}
 
export default Contacts;
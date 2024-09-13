import React from "react";

const Links = ({className}) => {
    const links = ["Home", "About", "Tech Stack", "Projects", "Contact"]

    return ( 
        <nav>
            <ul className={`flex justify-between w-full gap-10 ${className}`}>
                {links.map((item, i) => (
                    <li key={i}><a href="/" className="text-nowrap mr-9">{item}</a></li>
                ))}  
            </ul>
        </nav>
     );
}
 
export default Links;
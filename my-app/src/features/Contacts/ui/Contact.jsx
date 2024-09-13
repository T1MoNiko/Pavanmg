import React from "react";

const Contact = ({img, href}) => {
    return ( 
        <div className="">
            <a href={href}>
                <img src={img} className={`w-[30px] h-[30px]`} alt="" />
            </a>
        </div>
     );
}
 
export default Contact;
import React from "react";

const Contact = ({img, href}) => {
    return ( 
        <div className="">
            <a href={href}>
                <img src={img} className={`w-[30px] h-[30px] max-md:w-[25px] max-md:h-[25px]`} alt="" />
            </a>
        </div>
     );
}
 
export default Contact;
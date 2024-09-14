import React from "react";

const Logo = ({className}) => {
    return ( 
        <div className={className}>
            <img src="/img/logo1.png" className="w-[95%] max-md:w-[70%]" alt="" />
        </div>
     );
}
 
export default Logo;
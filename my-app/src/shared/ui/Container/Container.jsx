import React from "react";

const Container = ({ children, className }) => {
    return ( 
        <div className={`container max-w-[1200px] max-xl:px-5 mx-auto max-sm:px-2 ${className}`}>
            {children}
        </div>
     );
}
 
export default Container;